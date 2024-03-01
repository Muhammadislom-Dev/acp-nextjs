import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";
import Rating from "@/components/Rating";
// import { Inter } from "next/font/google";
import { Unbounded } from "next/font/google";
// const inter = Inter({ subsets: ["latin"] });
const unbounded = Unbounded({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${unbounded.className}`}>
      <AboutUs />
      <Rating />
      <Footer />
    </main>
  );
}
