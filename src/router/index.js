import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home";

Vue.use(VueRouter);

// Gestion des chemins du site SingleOnePage
const routes = [{
        path: "/",
        name: "Home",
        component: Home
    }, {
        path: "/forum",
        name: "Forum",
        component: () =>
            import("@/views/Forum.vue"),
    }, {
        path: "/search",
        name: "Search",
        component: () =>
            import("@/views/Search.vue"),
    },
    {
        path: "/api",
        name: "API",
        component: () =>
            import("@/views/API.vue"),
    }
];

const router = new VueRouter({
    mode: "history",
    routes,
});

export default router;