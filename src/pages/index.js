import React, { useState } from "react";
import Curtain from "@/components/curtain";
import { InteractiveMarquee } from "@/components/interactiveMarquee";
import Impressum from "@/components/impressum";
import Contact from "@/components/contact";
import Datenschutz from "@/components/datenschutz";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const [impressOpen, setImpressOpen] = useState(false);
  const [datenschutzOpen, setDatenschutzOpen] = useState(false);

  function handleImpress() {
    setImpressOpen((prev) => !prev);
  }
  function handleDatenschutz() {
    setDatenschutzOpen((prev) => !prev);
  }

  return (
    <Curtain>
      <div className={`p-5 text-white`}>
        <Contact />
        <div>
          <InteractiveMarquee />
        </div>
        <motion.div
          className=" mx-auto mb-12 flex-col gap-5  flex md:hidden w-full justify-center items-center "
          initial={{ opacity: 0, scale: 0.8, y: "100%" }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, type: "spring" }}
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
        <div className=" md:absoluteOFF md:right-0 md:left-0 md:mx-auto md:-bottom-5 w-[120%] md:w-[70vw] md:-z-5 md:opacity-75 opacity-30 md:translate-y-0 md:-translate-x-0 translate-y-10 -translate-x-6">
          <Image
            src="/to-gruppe-filter.png"
            alt="TO-Gruppe"
            width="1200"
            height="623"
          />
        </div>
        <div className="md:absolute md:right-7 md:bottom-7 left-7 bottom-10  flex flex-row gap-1 font-bold text-neutral-400 md:text-neutral-600 justify-start md:justify-end">
          <div
            onClick={handleImpress}
            className="hover:text-neutral-300 hover:cursor-pointer z-50 pointer-events-auto"
          >
            Impressum
          </div>
          <div className=" z-50">|</div>
          <div
            onClick={handleDatenschutz}
            className="hover:text-neutral-300 hover:cursor-pointer z-50 pointer-events-auto"
          >
            Datenschutz
          </div>
        </div>
      </div>
      <Impressum impressOpen={impressOpen} handleImpress={handleImpress} />
      <Datenschutz
        datenschutzOpen={datenschutzOpen}
        handleDatenschutz={handleDatenschutz}
      />
    </Curtain>
  );
}
