import Vue from "vue";
import Router from "vue-router";
import Comparison from "@/views/Comparison";
import Andre from "@/views/Andre";
import Luka from "@/views/Luka";
import Fabien from "@/views/Fabien";

Vue.use(Router);

export default new Router({

    mode: 'history',
    routes: [
        {
            path: "/",
            name: "comparison",
            component: Comparison
        },
        {
            path: "/andre",
            name: "andre",
            component: Andre
        },
        {
            path: "/luka",
            name: "luka",
            component: Luka
        },
        {
            path: "/fabien",
            name: "fabien",
            component: Fabien
        },
    ]
});