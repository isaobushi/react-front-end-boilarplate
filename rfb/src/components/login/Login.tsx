import React from 'react'
import { RouteComponentProps, Link, withRouter } from 'react-router-dom'
import * as  LoginStyle  from "./login.style"
     
const Login: React.FC<RouteComponentProps> = () => { 
 return  (
    <LoginStyle.LoginPage>
        <Link to="/home">Home</Link>
    </LoginStyle.LoginPage>
 )
}

export default withRouter(Login)