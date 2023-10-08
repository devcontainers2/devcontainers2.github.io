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
      { text: "Guide", link: "/guide/" },
      { text: "Reference", link: "/reference/" },
      { text: "Marketplace", link: "https://devcontainers.org/marketplace/" },
      { text: "devctl", link: "https://devcontainers.org/devctl/" },
      { text: "Specification", link: "https://devcontainers.org/spec/" },
    ],

    // https://vitepress.dev/reference/default-theme-config#sidebar
    sidebar: {
      "/guide/": [
        {
          text: "Introduction",
          items: [
            { text: "Why?", link: "/guide/why" },
            { text: "Getting started", link: "/guide/" },
            { text: "Use a Dockerfile", link: "/guide/use-dockerfile" },
            {
              text: "Use docker-compose.yml",
              link: "/guide/use-docker-compose",
            },
            { text: "Supporting tools", link: "/guide/supporting-tools" },
          ],
        },
        {
          text: "CI",
          items: [
            { text: "Prebuild your Dev Container", link: "/guide/prebuild" },
            { text: "Use in GitHub Actions", link: "/guide/github-actions" },
            { text: "Use in GitLab CI", link: "/guide/gitlab-ci" },
          ],
        },
        {
          text: "Authoring",
          items: [
            { text: "Create a feature", link: "/guide/create-feature" },
            {
              text: "Create a feature collection",
              link: "/guide/create-feature-collection",
            },
            { text: "Create a template", link: "/guide/create-template" },
            {
              text: "Create a template collection",
              link: "/guide/create-template-collection",
            },
          ],
        },
      ],
    },

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/devcontainers2",
      },
      {
        icon: "slack",
        link: "https://example.org/",
      },
      {
        icon: {
          svg: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><image width="24" height="24" href="https://res.cloudinary.com/practicaldev/image/fetch/s--E8ak4Hr1--/c_limit,f_auto,fl_progressive,q_auto,w_32/https://dev-to.s3.us-east-2.amazonaws.com/favicon.ico" /></svg>`,
        },
        link: "https://dev.to/devcontainers",
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
        'Released under the <a href="https://github.com/devcontainers2/devcontainers2.github.io/blob/main/LICENSE">CC-BY-4.0 License</a>.',
      copyright:
        'Copyright © 2023 <a href="https://microsoft.com/">Microsoft</a>',
    },
  },
});
