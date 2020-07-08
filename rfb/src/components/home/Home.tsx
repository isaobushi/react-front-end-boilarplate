import React, { useState } from 'react'
import { RouteComponentProps, Link, withRouter } from 'react-router-dom'
import { BoxStyled, HomePage } from "./home.style"
import { motion } from 'framer-motion';
import { Slide1, Slide2, Slide3 } from './slides.style';





const Home: React.FC<RouteComponentProps> = () => {

  const containerVariants = {
    visible: { opacity: 1, transition: { duration: 1 } },
    hidden: { opacity: 0},
    exit: {
      transition: {
        when: "beforeChildren",
        staggerChildren: .3
      }
    } 
  }

  const childVariants = {
    exit: {
      x: "-100vw",
      transition: {
        duration: .9,
        ease: [.75,.705,.5,.50]
      }
    }
  }

  const [isVisible, setIsVisible] = useState<boolean>(false);
  return (
    <>
      <motion.div
        style={{ height: "10vh", backgroundColor: "red", fontSize: 49, color: "black" }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <Slide2 variants={childVariants}/>
        <Slide3 variants={childVariants}/>
        <Slide1  variants={childVariants}/>
      </motion.div>
    </>
  )
}

export default (Home)