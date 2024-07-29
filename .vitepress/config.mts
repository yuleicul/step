import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Step",
  description: "My learning logs",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Logs", link: "/content/javascript" },
    ],

    sidebar: [
      {
        text: "Coding",
        items: [
          {
            text: "JavaScript",
            link: "/content/javascript",
          },
          {
            text: "React",
            link: "/content/react",
          },
          {
            text: "Web",
            link: "/content/web",
          },
          {
            text: "Svelte",
            link: "/content/svelte",
          },
          {
            text: "Remix",
            link: "/content/remix",
          },
          {
            text: "NestJS",
            link: "/content/nestjs",
          },
          {
            text: "Fastify",
            link: "/content/fastify",
          },
          {
            text: "Angular",
            link: "/content/angular",
          },
          {
            text: "RxJS",
            link: "/content/rxjs",
          },
          {
            text: "Azure",
            link: "/content/azure",
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
          {
            text: "Cantonese",
            link: "/content/cantonese",
          },
        ],
      },
      {
        text: "UX/UI",
        items: [
          {
            text: "Figma",
            link: "/content/figma",
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
          {
            text: "Guitar",
            link: "/content/guitar",
          },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/yuleicul" }],

    footer: {
      message: "Released under the CC BY-NC-SA 4.0 License.",
      copyright: "Copyright © 2023-present Yulei Chen",
    },
  },
  markdown: {
    image: {
      lazyLoading: true,
    },
  },

  // To fix `Found dead link ./index in file content/azure.md`
  ignoreDeadLinks: true,
});
