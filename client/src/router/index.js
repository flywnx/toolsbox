import Vue from "vue";
import VueRouter from "vue-router";
import home from "../page/Home.vue";
import find from "../page/Find.vue";
import search from "../page/Search.vue";

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
    "component": home
  },
  {
    "path": "/find",
    "name": "find",
    "meta": { "title": "简介" },
    "component": find
  },
  {
    "path": "/search",
    "name": "search",
    "meta": { "title": "简介" },
    "component": search
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
