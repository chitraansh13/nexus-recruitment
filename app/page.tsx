import Image from "next/image";
import styles from "./styles/landing.module.css"
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import Domains from "./components/Domains";


export default function Home() {
  return (
    <div className={styles.body}>
      <NavBar/>
      <HeroSection/>
      <Domains/>
    </div>
  );
}
