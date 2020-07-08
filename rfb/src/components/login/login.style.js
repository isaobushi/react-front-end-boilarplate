import { motion } from "framer-motion"
import styled from 'styled-components'

const variants = {
    visible: { opacity: 1, transition: { duration: 3 } },
    hidden: { opacity: 0 },
    exit: {
      x: "-100vw",
      transition: {ease: "easeInOut"}
    } 
};

const containerVariants = {
  hidden: {opacity: 0},
  visible: {opacity: 1, transition: {delay: 3.5, duration: 1.5}},
  exit: {
    x: "-100vw",
    transition: {ease: "easeInOut"}
  } 
}

const LoginPage = styled(motion.div).attrs(()=>({
  variants:{containerVariants},
  initial:"hidden",
  animate:"visibile",
  exit:"exit"
}))`
  position: relative;
  display: flex;
  justify-content:center;
  height: 100vh;
  width: 100vw;
  background: red;
  border-radius: 5px;
  cursor: pointer;
  will-change: width, height;
`

const BoxStyled = styled(motion.div).attrs(() => ({
    initial: "hidden",
    exit: "exit",
    variants}))`
    display: flex;
    background-color: limegreen;
   height: 20vh;
`

export { LoginPage, BoxStyled }