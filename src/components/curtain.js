// src/Curtain.js
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useWindowSize } from "@react-hook/window-size";

export default function Curtain({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [wWidth, wHeight] = useWindowSize();

  // const curtainVariants = {
  //   open: { width: "55%", transition: { duration: 0.4, ease: "easeInOut" } },
  //   closed: {
  //     width: 0,
  //     transition: { duration: 0.4, ease: "easeInOut", delay: 0.5 },
  //   },
  // };

  // const curtainButtonVariants = {
  //   open: {
  //     y: ["0px", "0px", "-240px", "-200px"],
  //     rotate: [0, 355, 365, 360],
  //     scale: [1, 1, 1, 0.75],
  //     transition: { duration: 1, ease: "easeInOut" },
  //   },
  //   closed: { rotate: 0 },
  // };

  const curtainVariants = {
    closed: { width: "57%", transition: { duration: 0.4, ease: "easeInOut" } },
    open: {
      width: 0,
      transition: { duration: 0.4, ease: "easeInOut", delay: 0 },
    },
  };

  const curtainButtonVariants = {
    open: {
      // y: "-150px",
      rotate: 360,
      scale: 0.8,
      top: wWidth > 500 ? "5%" : "15%",
    },
    closed: { rotate: 0 },
  };

  const grungeVariants = {
    open: { opacity: 0 },
    closed: { opacity: 0.2 },
  };

  const handleToggle = () => {
    setIsOpen((prev) => !prev); // Toggle the open state
  };

  return (
    <div className="relative h-screen overflow-hidden grunge-logoOFF">
      <Image
        src="/grunge_logo2.png"
        alt="Grunge Logo"
        width="500"
        height="758"
        className="absolute m-auto w-96 left-0 right-0 mx-auto"
      />
      <motion.div
        className="absolute z-30 left-0 top-0 h-full bg-neutral-900 origin-left  left-curtain"
        variants={curtainVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
      />
      <motion.div
        className="absolute z-30 right-0 top-0 h-full bg-neutral-800 origin-right right-curtain"
        variants={curtainVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
      />
      <div className="absolute flex z-50 left-0 h-full w-full items-center justify-center">
        <motion.div
          variants={grungeVariants}
          animate={isOpen ? "open" : "closed"}
          className="grunge"
        ></motion.div>
        <motion.div
          variants={curtainButtonVariants}
          animate={isOpen ? "open" : "closed"}
          transition={{ type: "spring" }}
          className="curtain-button"
          onClick={handleToggle}
        ></motion.div>
      </div>
      {children}
    </div>
  );
}
