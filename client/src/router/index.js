import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

// 消除点击同一路径会报错的问题
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

const routes = [
  {
    "path": "/",
    "redirect": "/home"
  },
  {
    "path": "/home",
    "name": "home",
    "meta": { "title": "首页" },
    "component": () => import(/* webpackChunkName: "home" */ "../views/Home.vue")
  },
  {
    "path": "/find",
    "name": "find",
    "meta": { "title": "发现" },
    "component": () => import(/* webpackChunkName: "home" */ "../views/Find.vue")
  }
  // {
  //   path: "/home",
  //   name: "home",
  //   meta: { title: "首页" },
  //   component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue"),
  //   children: [
  //     {
  //       path: "toolsTagList",
  //       name: "toolsTagList",
  //       meta: { title: "标签页" },
  //       component: () => import(/* webpackChunkName: "toolsTagList" */ "../views/ToolsTagList.vue")
  //     },
  //     {
  //       path: "toolsList",
  //       name: "toolsList",
  //       meta: { title: "标签页" },
  //       component: () => import(/* webpackChunkName: "toolsList" */ "../views/ToolsList.vue")
  //     }
  //   ]
  // }
];

const router = new VueRouter({
  "mode": "history",
  "base": process.env.BASE_URL,
  routes
});

export default router;
