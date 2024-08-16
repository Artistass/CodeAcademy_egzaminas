import { useNavigate } from "react-router-dom";
import styles from "./HomePage.module.css";
import CarMeets_Image from "../../Images/HomePage/CarMeets.jfif";
import DreamCar_Image from "../../Images/HomePage/DreamCar.jpg";
import CarEnthusiasts_Image from "../../Images/HomePage/CarEnthusiasts.jfif";
import Event_Image from "../../Images/HomePage/Event.jpg";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.textHeader}>All Upcoming Car Events</h1>
          <h4 className={styles.textInfo}>
            If you're looking for the best upcoming car events near you, then
            look no further! Supreme Drive has information on the best car
            events, track days and club meets throughout the Germany!
          </h4>
        </div>
      </div>

      <div className={styles.mainContainer}>
        <h1 className={styles.mainText}>Welcome to Supreme Drive!</h1>
        <div>
          <div className={styles.firstTextBlock}>
            <img
              className={styles.textBlockImage}
              src={CarMeets_Image}
              alt="CarMeets_Image"
            />
            <h4 className={styles.mainTextInfoLeft}>
              <span className={styles.spanText}>Supreme Drive</span> is your
              ultimate gateway to the most thrilling and diverse car events
              happening across Germany. From high-octane track days to relaxed
              club meets, we bring you the pulse of the automotive world.
            </h4>
          </div>

          <div className={styles.secondTextBlock}>
            <h4 className={styles.mainTextInfoRight}>
              <span className={styles.spanText}>Our mission is simple:</span> to
              connect car enthusiasts with unforgettable experiences. Whether
              you're a seasoned gearhead or new to the scene, our platform
              offers a comprehensive guide to events tailored to your passion.
            </h4>
            <img
              className={styles.textBlockImage}
              src={DreamCar_Image}
              alt="DreamCar_Image"
            />
          </div>

          <div className={styles.firstTextBlock}>
            <img
              className={styles.textBlockImage}
              src={CarEnthusiasts_Image}
              alt="CarEnthusiasts_Image"
            />
            <h4 className={styles.mainTextInfoLeft}>
              <span className={styles.spanText}>Join a community</span> where
              cars are more than just vehicles—they're a way of life. Share your
              passion, connect with fellow enthusiasts, and drive the excitement
              forward. With Supreme Drive, you'll always know where the action
              is.
            </h4>
          </div>

          <div className={styles.secondTextBlock}>
            <h4 className={styles.mainTextInfoRight}>
              <span className={styles.spanText}>Ready to hit the road?</span>{" "}
              Browse our event listings, mark your calendars, and get ready to
              experience car culture like never before. Your next automotive
              adventure starts here.
            </h4>
            <img
              className={styles.textBlockImage}
              src={Event_Image}
              alt="Event_Image"
            />
          </div>
        </div>

        <h1 className={styles.secondaryMainHeaderText}>Upcoming events :</h1>

        <div className={styles.secondaryMainContainer}>
          <div className={styles.buttonContainer}>
            <h1 className={styles.buttonTitle}>ReisBrennen</h1>
            <button
              className={styles.buttonReisbrennen}
              onClick={() => navigate("/reisbrennen")}
            ></button>
          </div>

          <div className={styles.buttonContainer}>
            <h1 className={styles.buttonTitle}>Bmw Syndikat-Asphaltfieber</h1>
            <button
              className={styles.buttonBmwSyndikat}
              onClick={() => navigate("/bmw-syndikat-asphaltfieber")}
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
}
