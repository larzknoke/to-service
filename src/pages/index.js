import React, { useState } from "react";
import Curtain from "@/components/curtain";
import { InteractiveMarquee } from "@/components/interactiveMarquee";
import Impressum from "@/components/impressum";
import Contact from "@/components/contact";

export default function Home() {
  const [impressOpen, setImpressOpen] = useState(false);

  function handleImpress() {
    setImpressOpen((prev) => !prev);
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
          <div className="hover:text-neutral-300 hover:cursor-pointer z-50">
            Datenschutz
          </div>
        </div>
      </div>
      <Impressum impressOpen={impressOpen} handleImpress={handleImpress} />
    </Curtain>
  );
}
