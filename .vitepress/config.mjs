import { defineConfig } from "vitepress";

import docSidebar from "../docs/文档/sidebar";
import diarySidebar from "../docs/日记本/sidebar";

import { InlineLinkPreviewElementTransform } from "@nolebase/vitepress-plugin-inline-link-preview/markdown-it";

import {
  GitChangelog,
  GitChangelogMarkdownSection,
} from "@nolebase/vitepress-plugin-git-changelog/vite";

export default defineConfig({
  title: "LittleChest 的笔记本",
  description: "记录 LittleChest 的各类项目文档。",
  titleTemplate: "LittleChest 的笔记本",
  lang: "zh-CN",
  cleanUrls: true,
  srcDir: "docs",
  metaChunk: true,
  themeConfig: {
    sidebar: {
      "/文档/": docSidebar,
      "/日记本/": diarySidebar,
    },
    outline: {
      label: "目录",
    },
    editLink: {
      pattern: "https://github.com/LittleChest/Notebook/edit/main/docs/:path",
      text: "在 GitHub 上编辑此页面",
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
  sitemap: {
    hostname: "https://notebook.littlew.top",
  },
  markdown: {
    config(md) {
      md.use(InlineLinkPreviewElementTransform);
    },
  },
  vite: {
    plugins: [
      GitChangelog({
        repoURL: () => "https://github.com/LittleChest/Notebook",
      }),
      GitChangelogMarkdownSection(),
    ],
    optimizeDeps: {
      exclude: [
        "@nolebase/vitepress-plugin-inline-link-preview/client",
        "@nolebase/vitepress-plugin-enhanced-readabilities/client",
        "vitepress",
        "@nolebase/ui",
      ],
    },
    ssr: {
      noExternal: [
        "@nolebase/vitepress-plugin-inline-link-preview",
        "@nolebase/vitepress-plugin-highlight-targeted-heading",
        "@nolebase/vitepress-plugin-enhanced-readabilities",
        "@nolebase/ui",
      ],
    },
  },
});
