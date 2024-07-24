const routerOptions = [
  {
    path: "/",
    name: "Home",
    component: "home/Home",
    meta: {},
  },
  {
    path: "/category/:id",
    name: "Category",
    component: "category/Category",
    meta: {},
  },
  {
    path: "/:pathMatch(.*)*",
    name: "PageNotFound",
    component: "PageNotFound",
    meta: {},
  }
]

const routes = routerOptions.map(route => {
  return {
    ...route,
    component: () => import(`../views/${route.component}.vue`),
  }
})

export default routes
