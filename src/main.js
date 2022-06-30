import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "vue-tweet";

axios.defaults.baseURL =
  process.env.NODE_ENV === "development"
    ? "https://tranquil-brook-40225.herokuapp.com"
    : "https://tranquil-brook-40225.herokuapp.com";

createApp(App).use(router).mount("#app");
