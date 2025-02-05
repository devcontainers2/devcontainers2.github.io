For simple use cases you can use your development container (dev container) for
CI without much issue. Once you begin using more advanced dev container
functionality such as [Features](/features), you will need dev container tooling
in your CI pipeline. While GitHub CI has the
[devcontainers-ci GitHub Action](https://github.com/marketplace/actions/devcontainers-ci),
there is no such analog in GitLab CI. To achieve the goal of using your dev
container in GitLab CI, the container must be pre-built.

This document will guide you on how to build a dev container with GitLab CI,
push that dev container to the GitLab Container Registry, and finally reference
that dev container in your main project for both local development and GitLab
CI.

For the purpose of this document, we will assume the main project is named
`my-project` and lives under the `my-user` path. The example here uses a few
[Features](/features), which is what forces the container to be pre-built.

## <a href="#dev-container-project" name="dev-container-project" class="anchor">The Development Container GitLab project</a>

Create a project in GitLab where the stand-alone dev container project will
live. As the main project is assumed to be named `my-project`, let's assume the
dev container project name will be `my-project-dev-container`

### <a href="#dev-container-json" name="dev-container-json" class="anchor">Development Container .devcontainer/devcontainer.json</a>

The example here is a CDK project for Python makes use of both the
[AWS CLI](https://github.com/devcontainers/features/tree/main/src/aws-cli) and
the community-maintained
[AWS CDK](http://github.com/devcontainers-contrib/features/tree/main/src/aws-cdk)
Features.

`.devcontainer/devcontainer.json`:

```json
{
  "build": {
    "context": "..",
    "dockerfile": "Dockerfile"
  },
  "features": {
    "ghcr.io/devcontainers/features/aws-cli:1": {},
    "ghcr.io/devcontainers-contrib/features/aws-cdk:2": {}
  },
  "customizations": {
    "vscode": {
      "settings": {
        "python.formatting.provider": "black"
      }
    }
  }
}
```

### <a href="#dev-container-dockerfile" name="dev-container-dockerfile" class="anchor">Development Container Dockerfile</a>

As this is a Python project working with CDK, the `Dockerfile` will begin by
using the latest Python dev container image and then install some basic packages
via `pip`.

`Dockerfile`:

```Dockerfile
FROM mcr.microsoft.com/devcontainers/python:latest

RUN pip3 --disable-pip-version-check --no-cache-dir install aws_cdk_lib constructs jsii pylint \
    && rm -rf /tmp/pip-tmp
```

### <a href="#dev-container-gitlab-ci" name="dev-container-gitlab-ci" class="anchor">Development Container .gitlab-ci.yml</a>

Since there is no GitLab CI equivalent to
[devcontainers-ci GitHub Action](https://github.com/marketplace/actions/devcontainers-ci),
we will need to install the devcontainers CLI manually. The following will:

1. Install the packages that the devcontainers CLI requires
2. Install the devcontainers CLI itself
3. Login to GitLab Container Repository
4. Build the dev container and push it to the GitLab Container Repository

`.gitlab-ci.yml`:

```yaml
image: docker:latest

variables:
  DOCKER_TLS_CERTDIR: "/certs"

services:
  - docker:dind

before_script:
  - apk add --update nodejs npm python3 make g++
  - npm install -g @devcontainers/cli

build:
  stage: build
  script:
    - docker login -u gitlab-ci-token -p ${CI_JOB_TOKEN} ${CI_REGISTRY}
    - devcontainer build --workspace-folder . --push true --image-name
      ${CI_REGISTRY_IMAGE}:latest
```

## <a href="#main-project" name="main-project" class="anchor">The Main GitLab project</a>

### <a href="#main-project-devcontainer-json" name="main-project-devcontainer-json" class="anchor">Main .devcontainer/devcontainer.json</a>

`.devcontainer/devcontainer.json`:

```json
{
  "image": "registry.gitlab.com/my-user/my-project-dev-container"
}
```

### <a href="#main-project-gitlab-ci-json" name="main-project-gitlab-ci-json" class="anchor">Main .gitlab.ci.yml</a>

Assuming the dev container project name is based off the main project name, the
`${CI_REGISTRY_NAME}` variable can be used. This configuration performs some
basic sanity checks and linting once merge requests are submitted.

`.gitlab-ci.json`:

```yaml
image: ${CI_REGISTRY_IMAGE}-dev-container:latest

before_script:
  - python --version
  - cdk --version

stages:
  - Build
  - Lint

py_compile:
  stage: Build
  script:
    - find . -type f -name "*.py" -print | xargs -n1 python3 -m py_compile
  rules:
    - if: '$CI_PIPELINE_SOURCE == "merge_request_event"'

cdk synth:
  stage: Build
  script:
    - JSII_DEPRECATED=fail cdk --app "python3 app.py" synth
  rules:
    - if: '$CI_PIPELINE_SOURCE == "merge_request_event"'

Pylint:
  stage: Lint
  script:
    - pylint *
  rules:
    - if: '$CI_PIPELINE_SOURCE == "merge_request_event"'

Black code format:
  stage: Lint
  script:
    - black --check --diff .
  rules:
    - if: '$CI_PIPELINE_SOURCE == "merge_request_event"'
```

## <a href="#conclusion" name="conclusion" class="anchor">Conclusion</a>

It's worth noting that the best practice would be to pin the versions of the
various packages installed by `pip`, `apk`, `npm` and the like. Version pinning
was omitted from this guide so that it can be executed as-is without issue.

The above provides a starting point for a dev container that's used for both
local development and in GitLab CI. It can easily be customized for other
languages and tool chains. Take it and make it your own, happy coding!
