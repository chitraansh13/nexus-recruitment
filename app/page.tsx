"use client"

import { useEffect, useState } from "react";
import styles from "./styles/landing.module.css";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import Domains from "./components/Domains";
import LoadingAnimation from "./components/LoadingAnimation";
import Events from './components/Events'

export default function Home() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer); 
  }, []);

  return (
    <>
      {loading ? (
        <LoadingAnimation />
      ) : (
        <div className={styles.body}>
          <NavBar />
          <div id="about"><HeroSection /></div>
          <div id="domains"><Domains /></div>
          <div id="events"><Events /></div>
        </div>
      )}
    </>
  );
}
