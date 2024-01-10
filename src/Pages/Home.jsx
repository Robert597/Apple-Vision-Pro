import React from 'react';
import Detail from "../Components/Details/detail";
import Banner from "../Components/Banner/Banner";
import About from "../Components/About/About";
import Design from "../Components/Sections/Design";
import Technology from "../Components/Sections/Technology";
import Security from "../Components/Sections/Security";
import {motion} from "framer-motion";

const Home = () => {
  return (
    <motion.div className='Home'
    exit={{x: -window.innerWidth, opacity:0, transition: {duration: 1}}}>
    <Banner/>
    <Detail/>
    <About/>
    <Design/>
    <Technology/>
    <Security/>
    </motion.div>
  )
}

export default Home