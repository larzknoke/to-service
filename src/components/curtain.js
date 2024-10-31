// src/Curtain.js
import React, { useState } from "react";
import { delay, motion } from "framer-motion";
import Image from "next/image";
import { useWindowSize } from "@react-hook/window-size";
import Link from "next/link";

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
    open: {
      width: 0,
      transition: { duration: 0.4, ease: "easeInOut", delay: 0.4 },
    },
    closed: { width: "57%", transition: { duration: 0.4, ease: "easeInOut" } },
  };

  const curtainButtonVariants = {
    open: {
      // y: "-150px",
      rotate: 360,
      scale: 0.8,
      top: wWidth > 500 ? "5%" : "15%",
    },
    closed: { rotate: 0, scale: 1, top: "15%" },
  };

  const grungeVariants = {
    open: { opacity: 0 },
    closed: { opacity: 0.2 },
  };

  const handleToggle = () => {
    setIsOpen((prev) => !prev); // Toggle the open state
  };

  return (
    <div className="relative h-[100svh]OFF  overflow-x-hidden	overflow-y-scroll	 md:overflow-hidden grunge-logoOFF pointer-events-none">
      <Image
        src="/grunge_logo2.png"
        alt="Grunge Logo"
        width="244"
        height="198"
        className="absolute m-auto w-96 left-0 right-0 mx-auto pointer-events-none"
      />
      <motion.div
        className="absolute   right-10 mx-auto top-6  flex-row gap-5 items-start hidden md:flex md:p-10"
        initial={{ opacity: 0, scale: 0.8, y: "-100%" }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, delay: 2, type: "spring" }}
      >
        <Image
          src="partner.svg"
          alt="Partner"
          width="150"
          height="50"
          className=" w-20 pt-4"
        />
        <Link href="https://tina-engel.com" target="_blank">
          <Image
            src="engel_logo.svg"
            alt="Engel Logo"
            width="500"
            height="758"
            className="w-36 pointer-events-auto"
          />
        </Link>
      </motion.div>
      <motion.div
        className="absolute z-30 left-0 top-0 h-full bg-neutral-900 origin-left  left-curtain"
        variants={curtainVariants}
        initial={"closed"}
        animate={"open"}
        transition={{ delay: 0.6, type: "spring" }}
      />
      <motion.div
        className="absolute z-30 right-0 top-0 h-full bg-neutral-800 origin-right right-curtain"
        variants={curtainVariants}
        initial={"closed"}
        animate={"open"}
        transition={{ delay: 0.6, type: "spring" }}
      />
      <div className="absolute flex z-50 left-0 h-full w-full items-center justify-center pointer-events-none	">
        <motion.div
          variants={grungeVariants}
          initial={"closed"}
          animate={"open"}
          transition={{ delay: 0.6, type: "spring" }}
          className="grunge pointer-events-none"
        ></motion.div>
        <motion.div
          variants={curtainButtonVariants}
          initial={"closed"}
          animate={"open"}
          transition={{ delay: 0.3, type: "spring" }}
          // animate={isOpen ? "open" : "closed"}
          className="curtain-button pointer-events-none"
          onClick={handleToggle}
        ></motion.div>
      </div>
      {children}
    </div>
  );
}
