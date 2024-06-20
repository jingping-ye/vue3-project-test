// core
import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router";

// load third party
import { loadPlugins } from "./plugins";

const app = createApp(App);

// load plugin
loadPlugins(app);

// css
import "element-plus/dist/index.css";
import "normalize.css";

// mock
// import "./mock/index";
console.log(JSON.stringify(import.meta.env));
console.log(process.env.NODE_ENV);

app.use(router);
app.mount("#app");
