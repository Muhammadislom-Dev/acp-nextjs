import AboutUs from "@/components/aboutUs";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${inter.className}`}>
      <AboutUs />
    </main>
  );
}
