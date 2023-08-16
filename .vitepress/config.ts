import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // https://vitejs.dev/config/
  vite: {
    server: {
      host: true,
    },
  },

  // https://vitepress.dev/guide/mpa-mode
  // ⚠️ EXPERIMENTAL! This means a FULL RELOAD on each navigation.
  mpa: true,
  // 👆 This is useful because forcing a FULL PAGE LOAD is helpful when some of
  // this site's pages are not indexed by Vitepress at build time (like /spec/)
  // and thus would fake-404 in a client-side router.

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
