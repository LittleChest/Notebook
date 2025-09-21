import { defineConfig } from "vitepress";

export default defineConfig({
  title: "LittleChest 的笔记本",
  description: "此笔记本记录了 littlew.top 的文档与笔记。",
  titleTemplate: "LittleChest 的笔记本",
  lang: "zh-CN",
  cleanUrls: true,
  srcDir: "docs",
  metaChunk: true,
});
