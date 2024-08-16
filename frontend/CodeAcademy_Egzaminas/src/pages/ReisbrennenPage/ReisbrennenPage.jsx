import { useNavigate } from "react-router-dom";
import RegistrationTable from "../../components/RegistrationTable/RegistrationTable";
import FetchRegistrations from "../../hooks/FetchRegistrations/FetchRegistrations";
import styles from "./ReisbrennenPage.module.css";
import GalleryImage1 from "../../Images//ReisBrennenPage/38923578_2294759053872229_8163045976995528704_o_20190102_1504430087.jpg";
import GalleryImage2 from "../../Images//ReisBrennenPage/39038149_2294759303872204_6675346537763045376_o_20190102_1912762913.jpg";
import GalleryImage3 from "../../Images//ReisBrennenPage/39242297_1815719741844377_1120044848510926848_o_20190102_2051101518.jpg";
import GalleryImage4 from "../../Images//ReisBrennenPage/maxresdefault.jpg";
import GalleryImage5 from "../../Images//ReisBrennenPage/Marco_03-1920x1080.jpg";
import GalleryImage6 from "../../Images//ReisBrennenPage/227802515_946684801_v16_9_1200.jpeg";

export default function ReisbrennenPage() {
  const registrations = FetchRegistrations();
  const navigate = useNavigate();

  return (
    <div className={styles.backgroundContainer}>
      <div className={styles.headerContainer}>
        <h1 className={styles.headerText}>Reisbrennen</h1>
      </div>

      <div className={styles.mainContainer}>
        <h1 className={styles.mainText}>What activities do they have?</h1>
        <h4 className={styles.eventStartText}>
          Event will start from 11/12/2024 to 11/15/2024
        </h4>

        <div className={styles.activitiesContainer}>
          <h1 className={styles.activitiesTitle}>Track Days</h1>
          <h4 className={styles.activitiesText}>
            Attendees can participate in track days where they can drive their
            own cars on the famous Lausitzring track.
          </h4>

          <h1 className={styles.activitiesTitle}>Car Show</h1>
          <h4 className={styles.activitiesText}>
            The event features a large car show where participants display their
            modified vehicles. This show is a key highlight, showcasing some of
            the most creatively modified cars in Europe.
          </h4>

          <h1 className={styles.activitiesTitle}>Drift Competitions</h1>
          <h4 className={styles.activitiesText}>
            Reisbrennen often includes drift events, where drivers compete in
            high-skill drifting contests.
          </h4>

          <h1 className={styles.activitiesTitle}>Drag Racing</h1>
          <h4 className={styles.activitiesText}>
            Another popular activity is drag racing, where cars compete to see
            who can achieve the fastest straight-line speed.
          </h4>

          <h1 className={styles.activitiesTitle}>Entertainment</h1>
          <h4 className={styles.activitiesText}>
            The event also includes live music, parties, and other forms of
            entertainment, making it more than just a car show.
          </h4>

          <h1 className={styles.ticketPricesTitle}>Ticket prices:</h1>

          <h2 className={styles.ticketTitle}>Day Ticket:</h2>
          <h4 className={styles.ticketText}>
            €29 in advance or €30 at the door, which includes entry for one
            person and one car.
          </h4>

          <h2 className={styles.ticketTitle}>3-Day Tickets:</h2>
          <h4 className={styles.ticketText}>
            VIP Camping Area: €79 in advance or €80 at the door.
          </h4>
          <h4 className={styles.ticketText}>
            Other Camping Areas (Fahrerlager, Speedway, Silent Hill, Infield):
            €69 in advance or €70 at the door.
          </h4>

          <h2 className={styles.ticketTitle}>4-Day Tickets:</h2>
          <h4 className={styles.ticketText}>
            VIP Camping Area: €99 in advance or €100 at the door.
          </h4>
          <h4 className={styles.ticketText}>
            Other Camping Areas (Fahrerlager, Speedway, Silent Hill, Infield):
            €89 in advance or €90 at the door.
          </h4>
        </div>
        <h1 className={styles.galleryTitle}>Gallery:</h1>
        <div className={styles.gallery}>
          <div className={styles.gallery_item}>
            <img src={GalleryImage1} alt="Gallery_Image1" />
          </div>
          <div className={styles.gallery_item}>
            <img src={GalleryImage2} alt="Gallery_Image2" />
          </div>
          <div className={styles.gallery_item}>
            <img src={GalleryImage3} alt="Gallery_Image3" />
          </div>
          <div className={styles.gallery_item}>
            <img src={GalleryImage4} alt="Gallery_Image4" />
          </div>
          <div className={styles.gallery_item}>
            <img src={GalleryImage5} alt="Gallery_Imag5" />
          </div>
          <div className={styles.gallery_item}>
            <img src={GalleryImage6} alt="Gallery_Image6" />
          </div>
        </div>

        <h1 className={styles.dontMissOut}>
          Exciting News! Many Enthusiasts Have Already Registered. Don’t Miss
          Out—Secure Your Spot Today!
        </h1>

        <RegistrationTable registrations={registrations} />

        <button className={styles.backButton} onClick={() => navigate("/")}>
          Back
        </button>
      </div>
    </div>
  );
}
