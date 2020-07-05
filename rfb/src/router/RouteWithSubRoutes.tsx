import React, { Suspense } from "react"
import { IRoute } from "./config";
import { Route, Redirect } from "react-router-dom";

interface IUser{
    authenticated: boolean;
}

const user: IUser = {
    authenticated: false
}
const RouteWithSubRoutes = (route: IRoute) => {
    /** Authenticated flag */
    const authenticated: boolean = user.authenticated;
    
    return (
      
      <Suspense fallback={route.fallback}>
        {console.log(route.redirect)}
        <Route
          path={route.path}
          render={(props) =>
            route.redirect ? <Redirect to={route.redirect}/> :
              route.private ? (
                authenticated ? route.component : <Redirect to='/home/login'/>
              ) : route.component && <route.component {...props} routes={route.routes}/>
          }
        />
      </Suspense>
    );
  };
  
  export default RouteWithSubRoutes;