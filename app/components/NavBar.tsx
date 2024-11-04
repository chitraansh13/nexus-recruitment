import styles from "../styles/NavBar.module.css"
import FadeIn from "./FadeIn"

export default function NavBar() {
  return (
    <FadeIn>
      <div className={styles.body}>
        <h1>Nexus</h1>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Domains</li>
        </ul>
      </div>
    </FadeIn>
  );
}