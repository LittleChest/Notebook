import DefaultTheme from "vitepress/theme";
import "./style.css";

import { h } from "vue";

import {
  NolebaseEnhancedReadabilitiesMenu,
  NolebaseEnhancedReadabilitiesScreenMenu,
} from "@nolebase/vitepress-plugin-enhanced-readabilities/client";
import "@nolebase/vitepress-plugin-enhanced-readabilities/client/style.css";

import { NolebaseHighlightTargetedHeading } from "@nolebase/vitepress-plugin-highlight-targeted-heading/client";
import "@nolebase/vitepress-plugin-highlight-targeted-heading/client/style.css";

import { NolebaseInlineLinkPreviewPlugin } from "@nolebase/vitepress-plugin-inline-link-preview/client";
import "@nolebase/vitepress-plugin-inline-link-preview/client/style.css";

import "@nolebase/vitepress-plugin-enhanced-mark/client/style.css";

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      "nav-bar-content-after": () => h(NolebaseEnhancedReadabilitiesMenu),
      "nav-screen-content-after": () =>
        h(NolebaseEnhancedReadabilitiesScreenMenu),
      "layout-top": () => [h(NolebaseHighlightTargetedHeading)],
    });
  },
  enhanceApp({ app }) {
    app.use(NolebaseInlineLinkPreviewPlugin);
  },
};
