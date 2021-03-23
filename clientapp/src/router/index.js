import Vue from "vue";
import Router from "vue-router";
import routes from "./routes";

Vue.use(Router);

const router = new Router({
    base: "/",
    mode: "history",
    routes, // short for `routes: routes`
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { x: 0, y: 0 }; //Scroll to top when routes change
        }
    }
});

// router.afterEach(cancelTopProgress);

router.beforeEach((to, from, next) => {
    const isAuthenticated = localStorage.getItem('user');

    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!isAuthenticated) {
            next({
                path: "/login",
                query: { redirect: to.fullPath }
            });
        } else {
            next();
        }
    } else {
        next(); // make sure to always call next()!
    }
});

export default router;
