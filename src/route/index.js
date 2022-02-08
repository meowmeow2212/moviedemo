import HomePage from "./../container/HomeTemplate/HomePage";
import AboutPage from "./../container/HomeTemplate/AboutPage";
import ListMoviePage from "./../container/HomeTemplate/ListMoviePage";
import DetailMovie from "./../container/HomeTemplate/DetailPage";
import HocPage from "./../container/HomeTemplate/HocPage";

import Dashboard from "./../container/AdminTemplate/Dashboard";
import AddUser from "./../container/AdminTemplate/AddUser";
import AuthPage from "./../container/AdminTemplate/AuthPage";

import Hook from "./../container/HomeTemplate/HOOK";

const routeHome = [
  {
    path: "/",
    component: HomePage,
    exact: true,
  },
  {
    path: "/about",
    component: AboutPage,
    exact: false,
  },
  {
    path: "/list-movie",
    component: ListMoviePage,
    exact: false,
  },
  {
    path: "/detail/:id",
    component: DetailMovie,
    exact: false,
  },
  {
    path: "/hoc-page",
    component: HocPage,
    exact: false,
  },

  {
    path: "/hook",
    component: Hook,
    exact: false,
  },


];

const routeAdmin = [
  {
    path: "/dashboard",
    component: Dashboard,
    exact: false,
  },
  {
    path: "/add-user",
    component: AddUser,
    exact: false,
  },


];

const routeAuth = [
  {
    path: "/auth",
    component: AuthPage,
    exact: false,
  }
];

export { routeHome, routeAdmin, routeAuth };
