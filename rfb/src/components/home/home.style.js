import { motion } from "framer-motion"
import styled from 'styled-components'

const variants = {
    visible: { opacity: 1, transition: { duration: 3 } },
    hidden: { opacity: 0 }
};

const HomePage = styled(motion.div)`
  position: relative;
  display: flex;
  justify-content:center;
  height: 100vh;
  width: 100vw;
  background: white;
  border-radius: 5px;
  cursor: pointer;
  will-change: width, height;
`

const BoxStyled = styled(motion.div).attrs(() => ({
    initial: "hidden",
    variants}))`
    display: flex;
    background-color: limegreen;
   height: 20vh;
`

export { HomePage, BoxStyled }