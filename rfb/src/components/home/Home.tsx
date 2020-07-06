import React, {useState} from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { BoxStyled } from "./home.style"




const Home: React.FC<RouteComponentProps> = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    return (
        <>
      <button
      style={{height: "4vh"}}
        type="button"
        onClick={() => setIsVisible(prevState => !prevState)}
      >
        Click here to make content visible
      </button>

      <BoxStyled 
        animate={isVisible ? "visible" : "hidden"}
      >
        I’m visible!
      </BoxStyled>
    </>
    )
}

export default Home