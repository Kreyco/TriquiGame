const UsersView = () => import(/* webpackChunkName: "search-view" */ '../views/UsersView');
const Login = () => import(/* webpackChunkName: "login" */ '../views/Login');

const routes = [
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/users",
    name: "users",
    meta: {
      requiresAuth: true
    },
    component: UsersView
  },
  {
    path: "/",
    name: "home",
    meta: {
      requiresAuth: true
    },
    component: UsersView
  }
];

export default routes;
