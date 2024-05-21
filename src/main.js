import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const app = createApp(App);

app.config.globalProperties.$flatpickr = flatpickr;

app.use(router).mount("#app");
