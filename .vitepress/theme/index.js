// https://vitepress.dev/guide/extending-default-theme#registering-global-components
import DefaultTheme from "vitepress/theme";
import Tag from "../../components/Tag.vue";
import Timestamp from "../../components/Timestamp.vue";

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // register your custom global components
    app.component("Tag", Tag);
    app.component("Timestamp", Timestamp);
  },
};
