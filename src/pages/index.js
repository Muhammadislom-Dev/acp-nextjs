import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Product from "@/components/Product";
import ReplainWidget from "./replain";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${inter.className}`}>
      <Navbar />
      <Header />
      <Product />
      <ReplainWidget />
    </main>
  );
}
