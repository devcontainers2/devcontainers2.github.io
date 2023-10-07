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
      link: /guides/getting-started
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
</script>

<HomeContent>

## What are Development Containers?

<img align="right" style="padding: 0.66em;" alt="Example devcontainer configuration" src="/example-devcontainer-json.png" />

A Development Container (or Dev Container for short) allows you to use a
container as a full-featured development environment. It can be used to run an
application, to separate tools, libraries, or runtimes needed for working with a
codebase, and to aid in continuous integration and testing. Dev containers can
be run locally or remotely, in a private or public cloud.

The Development Containers Specification seeks to find ways to enrich existing
formats with common development specific settings, tools, and configuration
while still providing a simplified, un-orchestrated single container option – so
that they can be used as coding environments or for continuous integration and
testing. Beyond the specification's core metadata, the spec also enables
developers to quickly share and reuse container setup steps through Dev
Container Features and Templates.

</HomeContent>
