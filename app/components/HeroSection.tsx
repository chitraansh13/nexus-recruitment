import Image from "next/image";
import styles from "../styles/heroSection.module.css";
import FadeIn from "./FadeIn";

export default function HeroSection() {
    return (
        <FadeIn>
            <div className={styles.body}>
                <div className={styles.textContainer}>
                <h3>"Unlocking Tomorrow's Technology Today!"</h3>
                <br />
                <h1>NEXUS CLUB</h1>
                <br />
                <p>Where innovation knows no bounds and creativity fuels our passion for making a difference in the world of technology and engineering.</p>
                <br /><br />
                    
                </div>
                <div className={styles.imageContainer}>
                    <Image
                        src="/innovation2.png"
                        alt="innovation image"
                        width={750}
                        height={750}
                        layout="intrinsic"
                        priority
                    />
                </div>
            </div>
        </FadeIn>
    );
}
