import { motion } from "framer-motion";

function Impressum({ impressOpen, handleImpress }) {
  const impressVariants = {
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.2, ease: "easeInOut" },
    },
    hide: {
      opacity: 0,
      y: 30,
      transition: { duration: 0.4, ease: "easeInOut" },
    },
  };

  return (
    <motion.div
      variants={impressVariants}
      initial="hide"
      animate={impressOpen ? "show" : "hide"}
      className={`z-40 impressum absolute top-auto left-0 right-0 bottom-16 md:bottom-0 m-4 p-6 md:p-8 bg-neutral-800 md:w-1/2 md:h-1/2 rounded-md`}
    >
      <div className="flex flex-row justify-between">
        <h1 className="text-neutral-600 uppercase text-2xl font-extrabold ">
          Impressum
        </h1>
        <svg
          onClick={handleImpress}
          className="w-7 hover:cursor-pointer"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"
              stroke="#525252"
              strokeWidth="2"
            ></path>{" "}
            <path
              d="M9 9L15 15M15 9L9 15"
              stroke="#525252"
              strokeWidth="2"
              strokeLinecap="round"
            ></path>{" "}
          </g>
        </svg>
      </div>
      <hr className="mt-2 mb-8 h-[3px] border-0 bg-neutral-600" />
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex flex-col gap-4 text-neutral-300 font-bold">
          <div>
            <p>
              TO-Service <br />
              Birkenweg 10 <br />
              37639 Bevern
            </p>
          </div>
          <div>
            <p>
              Tel.: 05532 / 81 99 484 <br />
              Mobil: 0172 / 56 14 321 <br />
              Fax: 05532 / 81 999 54 <br />
              Email: toservice88@gmail.com
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 text-neutral-300 font-bold">
          <div>
            <p>
              Konto: MKB - Bank Hamburg <br />
              IBAN DE41 2019 0800 0005 4798 00 <br />
              BIC GENODEF1MKB <br />
            </p>
          </div>
          <div>
            <p>Steuer-Nr. 31/132/01170</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Impressum;
