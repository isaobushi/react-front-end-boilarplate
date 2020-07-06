import { motion } from 'framer-motion'
import styled from 'styled-components'

const Slide1 = styled(motion.div)`
  position: relative;
  display: flex;
  justify-content:center;
  height: 100vh;
  width: 100vw;
  background: yellow;
  border-radius: 5px;
  cursor: pointer;
  will-change: opacity, transform;
`
const Slide2 = styled(motion.div)`
  position: relative;
  display: flex;
  justify-content:center;
  height: 100vh;
  width: 100vw;
  background: green;
  border-radius: 5px;
  cursor: pointer;
  will-change: opacity, transform;
`
const Slide3 = styled(motion.div)`
  position: relative;
  display: flex;
  justify-content:center;
  height: 100vh;
  width: 100vw;
  background: red;
  border-radius: 5px;
  cursor: pointer;
  will-change: opacity, transform;
`



export { Slide1, Slide2, Slide3}