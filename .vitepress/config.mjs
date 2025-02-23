import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Vue.Js设计与实现笔记",
  description: "学习与思考",
  base: "VueJs",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "https://vuejs.org/images/logo.png",
    outlineTitle: "目录",
    outline: "deep",
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    nav: [
      { text: "首页", link: "/" },
      { text: "博客", link: "https://www.caok.top/" },
      {
        text: "项目",
        items: [
          { text: "项目A", link: "https://www.caok.top/" },
          { text: "项目B", link: "https://www.caok.top/" },
        ],
      },
    ],
    sidebar: [
      {
        text: "第一章",
        items: [{ text: "权衡的艺术", link: "/Article/第一章/权衡的艺术.md" }],
      },
      {
        text: "第二章",
        items: [{ text: "Vue3.0", link: "/markdown-examples.md" }],
      },
      {
        text: "第三章",
        items: [{ text: "demo", link: "/api-examples.md" }],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
