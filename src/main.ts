import { createApp } from "vue";
import App from "./App.vue";
import "./style.css";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@mdi/font/css/materialdesignicons.css";

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    iconfont: "mdi", // Oder 'fa' für Font Awesome
  },
  theme: {
    defaultTheme: "dark"
  }
});

createApp(App).use(vuetify).mount("#app");
