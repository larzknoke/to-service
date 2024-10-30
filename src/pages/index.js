import React, { useState } from "react";
import Curtain from "@/components/curtain";
import { InteractiveMarquee } from "@/components/interactiveMarquee";
import Impressum from "@/components/impressum";
import Contact from "@/components/contact";
import Datenschutz from "@/components/datenschutz";

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
