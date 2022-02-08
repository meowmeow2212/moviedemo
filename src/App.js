import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import HomePage from "./container/HomeTemplate/HomePage";
// import AboutPage from "./container/HomeTemplate/AboutPage";
// import ListMoviePage from "./container/HomeTemplate/ListMoviePage";
import PageNotFound from "./container/PageNotFound";
// import NavbarHome from "./components/NavbarHome";
// import NavbarAdmin from "./components/NavBarAdmin";

import { routeHome, routeAdmin } from "./route";

import HomeTemplate from "./container/HomeTemplate";
import AdminTemplate from "./container/AdminTemplate";
import AuthPage from "./container/AdminTemplate/AuthPage";


function App() {
  const showLayoutHome = (route) => {
    if (route && route.length > 0) {
      return route.map((item, index) => {
        return (
          // Route được thay bằng HomeTemplate
          <HomeTemplate
            key={index}
            exact={item.exact}
            path={item.path}
            Component={item.component}
          />
        );
      });
    }
  };

  const showLayoutAdmin = (route) => {
    if (route && route.length > 0) {
      return route.map((item, index) => {
        return (
          <AdminTemplate
            key={index}
            exact={item.exact}
            path={item.path}
            Component={item.component}
          />
        );
      });
    }
  };

  return (
    <BrowserRouter>
      {/* <NavbarHome />
      <NavbarAdmin /> */}
      <Switch>
        {showLayoutHome(routeHome)}

        {/* Admin */}
        {showLayoutAdmin(routeAdmin)}

        {/* Auth */}
        <Route path="/auth" component={AuthPage}/>

        {/* localhost:3000 - HomePage */}
        {/* <Route exact path="/" component={HomePage} /> */}

        {/* localhost:3000/about - AboutPage */}
        {/* <Route path="/about" component={AboutPage} /> */}

        {/* localhost:3000/list-movie - ListMoviePage */}
        {/* <Route path="/list-movie" component={ListMoviePage} /> */}

        {/* PageNotFound */}
        <Route path="" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
