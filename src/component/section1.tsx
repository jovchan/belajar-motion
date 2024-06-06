import { useScroll, useTransform, motion } from "framer-motion";
import React, { useRef } from "react";

// import foto1 from "../assets"

export default function Header() {

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target : container,
    offset : ['start start' , 'end end']
  })

  
  const scale4 = useTransform(scrollYProgress, [0,1], [1,4])
  const scale5 = useTransform(scrollYProgress, [0,1], [1,5])
  const scale6 = useTransform(scrollYProgress, [0,1], [1,6])
  const scale7 = useTransform(scrollYProgress, [0,1], [1,7])
  const scale8 = useTransform(scrollYProgress, [0,1], [1,8])
  const x = useTransform(scrollYProgress, [0,1], [-250,250])


  return (
    <div className="mb-96">
      <h6 className="font-bold text-9xl bg-white">
        Section 1
      </h6>

      <div ref={container} className="kontener">
        <div className="stiki">
          <motion.div style={{ scale:scale4 }} className="el">
            <div className="foto foto1">
            </div>
          </motion.div>
          <motion.div style={{ scale:scale8 }} className="el">
            <div className="foto foto2">
            </div>
          </motion.div>
          <motion.div style={{ scale:scale6 }} className="el">
            <div className="foto foto3">
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
