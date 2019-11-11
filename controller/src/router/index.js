import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";

Vue.use(VueRouter);

const routes = [
    {
        "path": "/",
        "name": "login",
        "meta": { "title": "登录" },
        "component": Login
    },
    {
        "path": "/home",
        "name": "home",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        "meta": { "title": "首页" },
        "component": () =>
            import(/* webpackChunkName: "home" */ "../views/Home.vue"),
        "children": [
            {
                "path": "toolsTagList",
                "name": "toolsTagList",
                "meta": { "title": "标签页" },
                "component": () =>
                    import(
                        /* webpackChunkName: "toolsTagList" */ "../views/ToolsTagList.vue"
                    )
            }
        ]
    },
    {
        "path": "/toolsTagList",
        "name": "toolsTagList",
        "meta": { "title": "标签页" },
        "component": () =>
            import(
                /* webpackChunkName: "toolsTagList" */ "../views/ToolsTagList.vue"
            )
    }
];

const router = new VueRouter({
    "mode": "history",
    "base": process.env.BASE_URL,
    routes
});

export default router;
