import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import App from "./App";
import router from "./router";
import store from "./store";
import "./assets/css/icon.css";
import "./assets/css/init.css";
// import qiniu from "qiniu";
Vue.config.productionTip = false;
Vue.use(ElementUI);
// Vue.use(qiniu);

new Vue({
    router,
    store,
    "render": h => h(App)
}).$mount("#app");
