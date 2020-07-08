import { motion } from 'framer-motion'
import styled from 'styled-components'

const Slide1 = styled(motion.div)`
  position: fixed;
  display: flex;
  justify-content:center;
  height: 100vh;
  width: 100vw;
  background: rgb(255, 255, 255);
  border-radius: 5px;
  cursor: pointer;
  will-change: transform;
  top: 0;
  left:0;
  z-index: 3;
  mix-blend-mode: darken;
  transform: translateX(100%);
`
const Slide2 = styled(motion.div)`
  position: fixed;
  display: flex;
  justify-content:center;
  height: 100vh;
  width: 100vw;
  background: rgb(86,124,228);
  border-radius: 5px;
  cursor: pointer;
  will-change: transform;
  top: 0;
  left:0;
  z-index: 2;
  mix-blend-mode: darken;
  transform: translateX(100%);
`
const Slide3 = styled(motion.div)`
  position: fixed;
  display: flex;
  justify-content:center;
  height: 100vh;
  width: 100vw;
  background: rgb(59, 59, 59);
  border-radius: 5px;
  cursor: pointer;
  will-change: transform;
  top: 0;
  left:0;
  z-index: 1;
  mix-blend-mode: darken;
  transform: translateX(100%);
`


export { Slide1, Slide2, Slide3}