import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // https://vitejs.dev/config/
  vite: {
    server: {
      host: true,
    },
  },

  srcExclude: ["README.md"],
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],

  title: "Development containers",
  themeConfig: {
    logo: "/logo.png",

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/devcontainers" }],

    footer: {
      copyright: 'Copyright &copy; 2022 Microsoft'
    },

    search: {
      provider: 'local'
    }
  },
});
