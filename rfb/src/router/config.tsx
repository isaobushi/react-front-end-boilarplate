import React, { LazyExoticComponent, ComponentType, ReactNode, lazy } from "react"
export interface IRoute {
  // Path, like in basic prop
  path: string;
  // Exact, like in basic prop
  exact: boolean;
  // Preloader for lazy loading
  fallback: NonNullable<ReactNode> | null;
  // Lazy Loaded component
  component?: LazyExoticComponent<ComponentType<any>>;
  // Sub routes
  routes?: IRoute[];
  // Redirect path
  redirect?: string;
  // If router is private, this is going to be true
  private?: boolean;
}

export const routes: IRoute[] = [
  
  {
    path: '/home',
    component: lazy(() => import('../components/home/Home')),
    exact: true,
    private: false,
    fallback: <div> Loading... </div>,
    routes: [
      {
        path: '/home/signup',
        component: lazy(() => import('../components/signUp/SignUp')),
        exact: true,
        private: false,
        fallback: <div> Loading... </div>
      },
    ]
  },


  {
    path: '/login',
    component: lazy(() => import('../components/login/Login')),
    exact: true,
    private: false,
    fallback: <div> Loading... </div>
  },
  {
    path: '/protected',
    component: lazy(() => import('../components/protected/Protected')),
    exact: false,
    private: true,
    fallback: <div> Loading... </div>
  },
  {
    path: '/',
    exact: true,
    redirect: '/home',
    fallback: <div> Loading... </div>
  },
];
