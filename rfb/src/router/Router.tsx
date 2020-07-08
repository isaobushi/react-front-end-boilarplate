import React from "react";
import { Switch, useLocation, Route } from "react-router-dom"
import { IRoute } from "./config";
import RouteWithSubRoutes from "./RouteWithSubRoutes";
import { AnimatePresence } from "framer-motion"
import Login from "../components/login/Login"
import Home from "../components/home/Home";


interface IProps {
  routes: IRoute[];
}

const Router: React.FC<IProps> = ({ routes }) => {
  const location = useLocation();


  return (
    <AnimatePresence exitBeforeEnter onExitComplete={() => console.log("text")}>
      {/* <Switch location={location} key={location.key}>{routes.map((route: IRoute) => <RouteWithSubRoutes key={route.path} {...route} />)}</Switch> */}
      <Switch location={location} key={location.pathname}>
        <Route path="/home" component={Home}>
  
        </Route>
        <Route path="/login">
          <Login />
        </Route>

      </Switch>
    </AnimatePresence>
  )


};

export default Router;