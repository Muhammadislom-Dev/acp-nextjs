import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Product from "@/components/Product";
import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";
import Rating from "@/components/Rating";
import ReplainWidget from "./replain";

import { Unbounded } from "next/font/google";

const unbounded = Unbounded({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${unbounded.className}`}>
      <Navbar />
      <Header />
      <AboutUs />
      <Product />
      <Rating />
      <Footer />
      <ReplainWidget />
    </main>
  );
}
