import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from "firebase";

Vue.config.productionTip = false;
const config = {
  apikey: "AIzaSyA5xguCuQRc2QMjEhiaWP3d83E5YYfJwsc",
  projectId: "test-339cd",
  authDomain: "test-339cd.firebaseapp.com",
  databaseURL: "https://test-339cd.firebaseio.com",
  storageBucket: "test-339cd.appspot.com",
};

firebase.initializeApp(config);

export default firebase;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
