import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
    </>
  );
}
