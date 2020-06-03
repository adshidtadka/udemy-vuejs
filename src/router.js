import vue from "vue";
import router from "vue-router";
import Comments from "./views/Comments.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import store from "./store";

vue.use(router);

export default new router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Comments,
      beforeEnter(to, from, next) {
        if (store.getters.idToken) {
          next();
        } else {
          next("/login");
        }
      }
    },
    {
      path: "/login",
      component: Login,
      beforeEnter(to, from, next) {
        if (store.getters.idToken) {
          next("/");
        } else {
          next();
        }
      }
    },
    {
      path: "/Register",
      component: Register,
      beforeEnter(to, from, next) {
        if (store.getters.idToken) {
          next("/");
        } else {
          next();
        }
      }
    }
  ]
});
