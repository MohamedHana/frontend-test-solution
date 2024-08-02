const routerOptions = [
  {
    path: "/",
    name: "HomePage",
    component: "home/HomePage",
    meta: {},
  },
  {
    path: "/category/:id",
    name: "CategoryPage",
    component: "category/CategoryPage",
    meta: {},
  },
  {
    path: "/article/:id",
    name: "ArticlePage",
    component: "article/ArticlePage",
    meta: {},
  },
  {
    path: "/search/:query",
    name: "SearchPage",
    component: "search/SearchPage",
    meta: {},
  },
  {
    path: "/:pathMatch(.*)*",
    name: "PageNotFound",
    component: "PageNotFound",
    meta: {},
  },
];

const routes = routerOptions.map((route) => {
  return {
    ...route,
    component: () => import(`../views/${route.component}.vue`),
  };
});

export default routes;
