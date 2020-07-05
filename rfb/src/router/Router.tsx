import React, { ReactElement } from "react";
import {Switch, useLocation} from  "react-router-dom"
import { IRoute } from "./config";
import RouteWithSubRoutes from "./RouteWithSubRoutes";
import { useTransition, animated} from "react-spring";


interface IProps {
    routes: IRoute[];
  }
  
  const Router: React.FC<IProps>= ({routes} ) => {
    const location = useLocation();
    console.log("location", location)
    const transitions = useTransition(location, location => location.pathname, {
      from: { opacity: 0, transform: 'translate3d(100%,0,0)', backgroundColor: "red"},
      enter: { opacity: 1, transform: 'translate3d(0%,0,0)',  backgroundColor: "green", transition: "all 3s ease"},
      leave: { opacity: 0, transform: 'translate3d(-50%,0,0)',  backgroundColor: "yellow"},
    })
    return transitions.map(({ item: location, props, key }) => (
      <>
      <animated.div key={key} style={props}>
         <Switch location={location}>{routes.map((route: IRoute) => <RouteWithSubRoutes key={route.path} {...route} />)}</Switch>
      </animated.div>
    ) )
  };
  
  export default Router;