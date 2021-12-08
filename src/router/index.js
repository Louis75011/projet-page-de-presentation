import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home";
import Forum from "@/views/Forum";

Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "Home",
    component: Home
}, {
    path: "/forum",
    name: "Forum",
    component: Forum
}];

const router = new VueRouter({
    mode: "history",
    routes,
});

export default router;