import { defineConfig } from "vitepress"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Step",
  description: "My learning logs",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Logs", link: "/content/react" },
    ],

    sidebar: [
      {
        text: "Coding",
        items: [
          {
            text: "React",
            link: "/content/react",
          },
          {
            text: "Svelte",
            link: "/content/svelte",
          },
          {
            text: "Angular",
            link: "/content/angular",
          },
          {
            text: "RxJS",
            link: "/content/rxjs",
          },
        ],
      },
      {
        text: "Language",
        items: [
          {
            text: "English",
            link: "/content/english",
          },
        ],
      },
      {
        text: "Others",
        items: [
          {
            text: "Cooking",
            link: "/content/cooking",
          },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/yuleicul" }],
  },
})
