import { Open_Sans } from "next/font/google";
import "@/styles/globals.css";

const opensans = Open_Sans({
  // weight: "400",
  subsets: ["latin"],
  variable: "--font-opensans",
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${opensans.variable} font-sans bg-neutral-900`}>
      <Component {...pageProps} />
    </main>
  );
}
