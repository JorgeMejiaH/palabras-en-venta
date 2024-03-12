import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const app = createApp(App);

app.config.globalProperties.$flatpickr = flatpickr;

app.use(router).mount("#app");
