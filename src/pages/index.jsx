import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Product from "@/components/Product";
import Footer from "@/components/Footer";
import Rating from "@/components/Rating";
import ReplainWidget from "./replain";

import { Unbounded } from "next/font/google";
import News from "@/components/News";
import Contact from "@/components/Contact";
import Partner from "@/components/Partner";
import AboutUs from "@/components/AboutUs";


const unbounded = Unbounded({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${unbounded.className}`}>
      <Navbar />
      <Header />
      <AboutUs />
      <Product />
      <Rating />
      <Partner />
      <News />
      <Contact />
      <Footer />
      <ReplainWidget />
    </main>
  );
}
