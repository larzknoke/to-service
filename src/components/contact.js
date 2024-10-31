import Image from "next/image";
import Link from "next/link";

function Contact() {
  return (
    <div className="contact-wrapper flex flex-col gap-4 p-3  md:p-10 pointer-events-auto">
      <Image
        src="kontakt.svg"
        alt="Kontakt"
        width="218"
        height="33"
        className="w-28 md:w-40"
      />
      <div className="flex flex-row gap-5 items-center">
        <Link href="https://www.facebook.com/ToService" target="_blank">
          <Image
            src="facebook.svg"
            alt="Facebook Logo"
            width="218"
            height="33"
            className=" w-7 md:w-9"
          />
        </Link>
        <div className="flex flex-row uppercase font-extrabold gap-2 text-sm md:text-lg">
          <div className="flex flex-col gap-2">
            <p className="leading-3 text-neutral-500">FON</p>
            <p className="leading-3 text-neutral-500">EMAIL</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="leading-3 text-neutral-300">0172 / 56 14 321</p>
            <p className="leading-3 text-neutral-300">
              <Link href="mailto:toservice88@gmail.com">
                toservice88@gmail.com
              </Link>
            </p>
            {/* <p className="leading-3">toservice88@gmail.com</p> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
