import React, { useState } from "react";
import { motion } from "framer-motion";
import Curtain from "@/components/curtain";
import Image from "next/image";
import { InteractiveMarquee } from "@/components/interactiveMarquee";

export default function Home() {
  return (
    <Curtain>
      <div className={`p-5 text-white`}>
        <div className="contact-wrapper flex flex-col gap-4 p-3 md:p-10">
          <Image
            src="kontakt.svg"
            alt="Kontakt"
            width="218"
            height="33"
            className="w-28 md:w-40"
          />
          <div className="flex flex-row gap-5 items-center">
            <Image
              src="facebook.svg"
              alt="Facebook Logo"
              width="218"
              height="33"
              className=" w-7 md:w-9"
            />
            <div className="flex flex-row uppercase font-extrabold gap-2 text-sm md:text-lg">
              <div className="flex flex-col gap-2">
                <p className="leading-3 text-neutral-500">FON</p>
                <p className="leading-3 text-neutral-500">EMAIL</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="leading-3">0172 / 56 14 321</p>
                <p className="leading-3">info@to-service.com</p>
                {/* <p className="leading-3">toservice88@gmail.com</p> */}
              </div>
            </div>
          </div>
        </div>
        <div>
          <InteractiveMarquee />
        </div>
        <div className="flex flex-row gap-1 font-bold text-neutral-600 justify-start md:justify-end ">
          <div>Impressum</div>
          <div>|</div>
          <div>Datenschutz</div>
        </div>
      </div>
    </Curtain>
  );
}
