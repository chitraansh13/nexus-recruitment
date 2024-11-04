import styles from "../styles/NavBar.module.css";
import FadeIn from "./FadeIn";

export default function NavBar() {
  return (
    <FadeIn>
      <div className={styles.body}>
        <h1>Nexus</h1>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#domains">Domains</a></li>
          <li><a href="#events">Events</a></li>
        </ul>
      </div>
    </FadeIn>
  );
}
