import type { App } from "vue";
import ElementPlus from "element-plus";

/**
 * 完整引入element-ui
 * @param app vue实例
 */
function loadElementPlus(app: App) {
  app.use(ElementPlus);
}
export { loadElementPlus };
