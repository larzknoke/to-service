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
          className=" mx-auto  flex-col gap-5  flex md:hidden w-full justify-center items-center "
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
              className="w-36"
            />
          </Link>
        </motion.div>
        <div className="absolute md:right-7 md:bottom-7 left-7 bottom-10  flex flex-row gap-1 font-bold text-neutral-600 justify-start md:justify-end">
          <div
            onClick={handleImpress}
            className="hover:text-neutral-300 hover:cursor-pointer z-50"
          >
            Impressum
          </div>
          <div className=" z-50">|</div>
          <div
            onClick={handleDatenschutz}
            className="hover:text-neutral-300 hover:cursor-pointer z-50"
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
