import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // Remove this once all links are valid. This is just so that CI passes and
  // the site gets deployed as-is to GitHub Pages.
  ignoreDeadLinks: true,

  // Surprised this isn't the default. 🤷‍♂️
  srcExclude: ["**/README.md", "**/CONTRIBUTING.md"],

  // https://vitejs.dev/config/
  vite: {},

  // https://vitepress.dev/guide/sitemap-generation
  sitemap: {
    hostname: "https://devcontainers.org",
  },

  title: "Dev Containers",
  description:
    "An open specification for enriching containers with development specific content and settings",

  head: [
    // https://github.com/vuejs/vitepress/issues/560
    ["link", { rel: "icon", href: "/favicon.ico" }],

    // https://github.com/vuejs/vitepress/issues/1131
    [
      "script",
      {
        async: "",
        src: `https://www.googletagmanager.com/gtag/js?id=${process.env.GA_TRACKING_ID}`,
      },
    ],
    [
      "script",
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${process.env.GA_TRACKING_ID}');`,
    ],

    // https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel#license
    [
      "link",
      {
        rel: "license",
        href: "https://github.com/devcontainers2/devcontainers2.github.io/blob/main/LICENSE",
      },
    ],
  ],

  // https://vitepress.dev/reference/default-theme-config
  themeConfig: {
    logo: "/favicon.ico",

    // https://vitepress.dev/reference/default-theme-search#search
    search: {
      provider: "local",
    },

    nav: [
      { text: "Home", link: "/" },
      { text: "Getting started", link: "/getting-started" },
      { text: "Marketplace", link: "https://devcontainers.org/marketplace/" },
      { text: "devctl", link: "https://devcontainers.org/devctl/" },
      {
        text: "Specification",
        link: "https://devcontainers.org/development-containers/",
      },
    ],

    // https://vitepress.dev/reference/default-theme-config#sidebar
    sidebar: [
      { text: "Getting started", link: "/getting-started" },
      {
        text: "Guides",
        items: [
          { text: "Create a feature", link: "/guides/create-a-feature" },
          { test: "Use a Dockerfile", link: "/guides/use-dockerfile" },
          { text: "Use in GitHub Actions", link: "/guides/github-actions" },
          { test: "Use in GitLab CI", link: "/guides/gitlab-ci" },
        ],
      },
    ],

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/devcontainers2/devcontainers2.github.io",
      },
    ],

    // https://vitepress.dev/reference/default-theme-edit-link
    editLink: {
      pattern:
        "https://github.com/devcontainers2/devcontainers2.github.io/edit/main/:path",
    },

    // https://github.com/vuejs/vitepress/issues/1037
    footer: {
      message:
        'Released under the <a href="https://github.com/jcbhmr/cmakebyexample.dev/blob/main/LICENSE">CC-BY-4.0 License</a>.',
      copyright:
        'Copyright © 2023 <a href="https://microsoft.com/">Microsoft</a>',
    },
  },
});
