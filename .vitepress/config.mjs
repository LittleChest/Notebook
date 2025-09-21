import { defineConfig } from "vitepress";

export default defineConfig({
  title: "LittleChest 的笔记本",
  description: "此笔记本记录了 littlew.top 的文档与笔记。",
  titleTemplate: "LittleChest 的笔记本",
  lang: "zh-CN",
  cleanUrls: true,
  srcDir: "docs",
  metaChunk: true,
  themeConfig: {
    outline: {
      label: "目录",
    },
    editLink: {
      pattern:
        "https://github.com/LittleChest/Documention/edit/main/docs/:path",
      text: "在 GitHub 上编辑此页面",
    },
    lastUpdated: {
      text: "最后更新于",
    },
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",
    sidebarMenuLabel: "菜单",
    returnToTopLabel: "返回顶部",
    langMenuLabel: "选择语言",
  },

  vite: {
    optimizeDeps: {
      exclude: [
        "@nolebase/vitepress-plugin-enhanced-readabilities/client",
        "vitepress",
        "@nolebase/ui",
      ],
    },
    ssr: {
      noExternal: [
        "@nolebase/vitepress-plugin-highlight-targeted-heading",
        "@nolebase/vitepress-plugin-enhanced-readabilities",
        "@nolebase/ui",
      ],
    },
  },
});
