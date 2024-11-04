import styles from "../styles/Events.module.css";
import FadeIn from "./FadeIn";
import EventCard from "./EventCard";

export default function Events() {
  return (
    <FadeIn>
      <div className={styles.body}>
        <h1>Our Successful Events...</h1>
        <div className={styles.cardContainer}>
          <EventCard
            title="NexCode"
            date="Sat Jan 22 2022"
            imageSrc="/NexCode.webp" 
            altText="NexCode Event"
            description="The event was held in college on an online platform called Kaggle, 
            which required the students to be grouped in teams of 5 to solve a common problem statement.
            The judging process for this event was completely automated and provided to us by Kaggle."
          />
          <EventCard
            title="NexHunt"
            date="Wed Mar 09 2022"
            imageSrc="/NexHunt.webp"
            altText="NexHunt Event"
            description="The participants were given 10 problems of varying difficulty, requiring them to explore 
            various useful online tools and websites. Questions ranged from ML, Blockchain, 
            Web Dev, Algorithms and much more. On solving every question, you get a clue which would 
            be helpful for solving the special 11 th question."
          />
          <EventCard
            title="NeuroNex"
            date="Sat Sep 09 2023"
            imageSrc="/NeuroNex-1.webp" 
            altText="NeuroNex Event"
            description="The event was held in college on an online platform called Kaggle, 
            which required the students to be grouped in teams of 5 to solve a common problem statement.
            The judging process for this event was completely automated and provided to us by Kaggle."
          />
        </div>
      </div>
    </FadeIn>
  );
}
