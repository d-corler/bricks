import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// Plugins
import { createCore } from "@/plugins/manager/core";

const core = createCore();

createApp(App)
  .use(router)
  .use(core)
  .mount("#app");
