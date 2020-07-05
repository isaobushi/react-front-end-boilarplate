import React from 'react'
import { RouteComponentProps, Link } from 'react-router-dom'
     
const Home: React.FC<RouteComponentProps> = () => { 
 return (
     <>
     <Link to="/login">Loign</Link>
     <Link to="/signup">Sign Up</Link>
     </>
 )
}

export default Home