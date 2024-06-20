import type { App } from "vue";
import { loadElementPlus } from "./element-plus";

/**
 * 加载插件
 * @param app vue 实例
 */
function loadPlugins(app: App) {
  loadElementPlus(app);
}

export { loadPlugins };
