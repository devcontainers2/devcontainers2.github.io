---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Development containers"
  tagline:
    An open specification for enriching containers with development specific
    content and settings
  actions:
    - theme: brand
      text: Get started
      link: "#getting-started"
    - theme: alt
      text: Marketplace
      link: /marketplace
  image:
    src: /hero.png

features:
  - icon:
      src: /json-icon.svg
    title: Configuration as JSON
    details:
      Stop wasting time wrangling Docker images. Quickly manage and configure
      your Dev Containers with JSON. Dev environments as code couldn’t be
      easier—or faster.
    link: /reference/devcontainer-json
    linkText: devcontainer.json reference
  - icon: 💻
    title: Works with your favorite tools
    details:
      We've collaborated with VS Code, GitHub Codespaces, Jupyter, and JetBrains
      so you can use your devcontainer.json environment anywhere.
    link: /supporting-tools
    linkText: See supporting tools
---

<script setup>
// https://github.com/vuejs/vitepress/issues/800
import HomeContent from '.vitepress/theme/components/HomeContent.vue';
import TwoCols from ".vitepress/theme/components/TwoCols.vue"
</script>

<HomeContent>

# Getting started <Badge type="info" text="GitHub Codespaces" />

DevContainers are a powerful tool for creating consistent development environments for your projects. GitHub Codespaces provides an easy and seamless way to get started with DevContainers. In this guide, we'll walk you through the steps to set up your development environment quickly.

## Step 1: Create a New GitHub Repository

To begin, create a new GitHub repository where you plan to store your project's source code. If you already have a repository, you can skip this step and use your existing one.

## Step 2: Create a `.devcontainer/devcontainer.json` File

<TwoCols>
<div>

Next, you'll need to create a `.devcontainer` directory at the root of your repository if it doesn't already exist. Inside this directory, create a file named `devcontainer.json`. This JSON file is where you'll define the configuration for your DevContainer.

- `"name"`: Give your DevContainer a meaningful name.
- `"image"`: Specify the Docker image you want to use for your development environment. In this example, we're using the Ubuntu image as the base.
- `"features"`: Define the features you want to include in your DevContainer. Here, we're using a Node.js feature from GitHub Container Registry (ghcr.io).

</div><div>

```json
{
  "name": "My Node.js DevContainer",
  "image": "ubuntu",
  "features": {
    "ghcr.io/devcontainers/features/node": {}
  }
}
```

</div>
</TwoCols>

## Step 3: Click "Open in Codespaces" on GitHub

Once you've defined your DevContainer configuration, navigate to your GitHub repository and click the "Code" button. In the dropdown menu, select "Open with Codespaces." This will automatically create a Codespace using the configuration you specified in the `devcontainer.json` file.

![Open in Codespaces](https://placekitten.com/600/400)

GitHub Codespaces will set up your development environment in the cloud, using the Ubuntu base image and including the Node.js feature from GitHub Container Registry. You'll have instant access to a consistent development environment with all the tools and extensions you need.

That's it! You're now ready to start developing in your DevContainer using GitHub Codespaces. Happy coding!


</HomeContent>
