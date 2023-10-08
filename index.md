---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Development containers"
  tagline: Specification & tooling for composable and reproducable development
    environments
  actions:
    - theme: brand
      text: Get started
      link: /guide/
    - theme: alt
      text: Marketplace
      link: https://devcontainers.org/marketplace/
  image:
    src: /hero.png

# TODO: Add more feature blurbs
features:
  - icon: 💻
    title: Works with your favorite tools
    details:
      We've collaborated with VS Code, GitHub Codespaces, Jupyter, and JetBrains
      so you can use your devcontainer.json anywhere.
    link: /guide/supporting-tools
    linkText: See supporting tools
---

<script setup>
// https://github.com/vuejs/vitepress/issues/800
import HomeContent from '.vitepress/theme/components/HomeContent.vue';
import TwoCols from ".vitepress/theme/components/TwoCols.vue"
import { VPButton } from "vitepress/theme"
</script>

<HomeContent>
<TwoCols>
<template #left>

<!-- TODO: Make this roughly same length as example code -->

Dev Containers let you configure consistent development environments for your
projects. Just add a `.devcontainer/devcontainer.json` file to your project!

<VPButton text="Get started" href="/guide/" style="
  --vp-button-brand-border: green;
  /* --vp-button-brand-text: ; */
  --vp-button-brand-bg: darkgreen;
  --vp-button-brand-hover-border: lime;
  /* --vp-button-brand-hover-text: ; */
  --vp-button-brand-hover-bg: green;
" />

</template>
<template #right>

```json
{
  "image": "mcr.microsoft.com/devcontainers/javascript-node",
  "features": {
    "ghcr.io/devcontainers/features/rust": {}
  },
  "postCreateCommand": "npm install"
}
```

</template>
</TwoCols>
</HomeContent>
