// files
import BottomNavigation from "./BottomNavigation";
import Footer from "./Footer";
import Header from "./Header";
import Navigation from "./Navigation";
import Seo from "./Seo";

import { Reem_Kufi } from "@next/font/google";
const reemkufi = Reem_Kufi({ subsets: ["latin"] });

export default function Layout({ children }: Children) {
  return (
    <div
      className={`pb-24 bg-white dark:bg-black text-black dark:text-white min-h-screen ${reemkufi.className} `}
    >
      <Seo />
      <Navigation />
      <Header />
      {children}
      {/* <Footer /> */}
      <BottomNavigation />
    </div>
  );
}
