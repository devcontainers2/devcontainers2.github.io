# Getting Started

The heart of a Dev Container is the `.devcontainer/devcontainer.json` file.
That's where all the huicy configuration magic is stored. To get started, create
a JSON file named `devcontainer.json` in the `.devcontainer` directory of your
project. The following example is a good starting point:

```json
{
  "image": "mcr.microsoft.com/devcontainers/javascript-node"
}
```

From there, you can use any of [the various `devcontainer.json` options] to
customize the container to your liking. You can even use a local `Dockerfile` if
you want!

For most users, though, the recommended way to compose software onto a base
image (like the `javascript-node` base image) is with [Dev Container Features].

```json
{
  "image": "mcr.microsoft.com/devcontainers/javascript-node",
  "features": {
    "ghcr.io/devcontainers/features/rust": {}
  }
}
```

👆 Look at that! We just added the entire Rust toolchain to our JavaScript Dev
Container with a single line of JSON! 😎 You can find a complete list of all
indexed features at [containers.dev/features]. Make sure to check the
documentation of those features to see if they have any additional configuration
options! 😉

🚀 If you want to skip this hassle and use a premade Dev Container template, you
can find examples at [containers.dev/templates].

☁️ Another easy way to get started with Dev Containers is to use [GitHub
Codespaces]. Codespaces are a hosted version of VS Code that use
`devcontainer.json` to define a development environment.

<div align="center">

![GitHub Codespaces creation wizard](https://user-images.githubusercontent.com/61068799/248898797-e9c7a8c8-e7a4-4658-ad33-e9ef937b3386.png)

[👉 Click this text to try it out yourself!](https://github.com/codespaces/new?skip_quickstart=true&machine=standardLinux32gb&repo=501264105&ref=main&devcontainer_path=.devcontainer%2Fdevcontainer.json&geo=UsEast)

</div>

📄 Also check out [our @devcontainers dev.to page] for more blog posts, guides,
tips, and tutorials!

<!-- prettier-ignore-start -->
[containers.dev/templates]: https://containers.dev/templates
[containers.dev/features]: https://containers.dev/features
[Dev Container Features]: https://containers.dev/spec/
[the various `devcontainer.json` options]: https://containers.dev/spec/#devcontainerjson
[GitHub Codespaces]: https://github.com/features/codespaces
[our @devcontainers dev.to page]: https://dev.to/devcontainers
<!-- prettier-ignore-end -->
