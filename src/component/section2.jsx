"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import foto1 from "../assets/foto/1.png";
import PropTypes from 'prop-types';

export default function Sect2() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={container}>
      <h6 className="font-bold text-9xl bg-white">Section 2</h6>
      <div className="relative h-[200vh]">
        <Section1 scrollYProgress={scrollYProgress}/>
        <Section2 scrollYProgress={scrollYProgress}/>
      </div>
    </div>
  );
}

const Section1 = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);
  return (
    <motion.div style={{ scale,rotate }} className="h-screen -z-50 sticky top-0 bg-white">
      <img className="h-screen" src={foto1} alt="" />
    </motion.div>
  );
};

Section1.propTypes = {
    scrollYProgress: PropTypes.object.isRequired,
  };

const Section2 = ({ scrollYProgress }) => {
    const scale = useTransform(scrollYProgress, [0, 1], [0.8,1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [5,0]);
  return (
    <motion.div style={{ scale,rotate }} className="h-screen z-50 bg-green-900 text-center justify-center items-center text-9xl">
      hello
    </motion.div>
  );
};

Section2.propTypes = {
    scrollYProgress: PropTypes.object.isRequired,
  };
