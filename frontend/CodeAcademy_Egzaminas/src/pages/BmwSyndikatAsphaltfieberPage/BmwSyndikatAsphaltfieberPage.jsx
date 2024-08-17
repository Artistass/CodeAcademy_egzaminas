import { useNavigate } from "react-router-dom";
import RegistrationTable from "../../components/RegistrationTable/RegistrationTable";
import FetchRegistrations from "../../hooks/FetchRegistrations/FetchRegistrations";
import styles from "./BmwSyndikatAsphaltfieberPage.module.css";
import GalleryImage1 from "../../Images/BmwSyndikatAsphaltfieberPage/DJI_0045.jpg";
import GalleryImage2 from "../../Images/BmwSyndikatAsphaltfieberPage/DSC01085.jpg";
import GalleryImage3 from "../../Images/BmwSyndikatAsphaltfieberPage/DSC01425.jpg";
import GalleryImage4 from "../../Images/BmwSyndikatAsphaltfieberPage/DSC01554.jpg";
import GalleryImage5 from "../../Images/BmwSyndikatAsphaltfieberPage/DSC01612.jpg";
import GalleryImage6 from "../../Images/BmwSyndikatAsphaltfieberPage/IMG_8719-Web.jpg";

export default function BmwSyndikatAsphaltfieberPage() {
  const navigate = useNavigate();

  const [registrations, fetchRegistrations] = FetchRegistrations();

  return (
    <div className={styles.backgroundContainer}>
      <div className={styles.headerContainer}>
        <h1 className={styles.headerText}>
          BMW Syndikat <br /> Asphaltfieber
        </h1>
      </div>

      <div className={styles.mainContainer}>
        <h1 className={styles.mainText}>What activities do they have?</h1>
        <h4 className={styles.eventStartText}>
          Event will start from 12/12/2024 to 12/15/2024
        </h4>

        <div className={styles.activitiesContainer}>
          <h1 className={styles.activitiesTitle}>Car Shows</h1>
          <h4 className={styles.activitiesText}>
            One of the main highlights is the massive car show where BMW owners
            showcase their cars, ranging from classic models to the latest
            high-performance vehicles. The variety of customizations,
            restorations, and modifications on display is impressive.
          </h4>

          <h1 className={styles.activitiesTitle}>Drag Races and Drift Shows</h1>
          <h4 className={styles.activitiesText}>
            The event features various motorsport activities, including drag
            races and drift shows, where participants can test the limits of
            their vehicles.
          </h4>

          <h1 className={styles.activitiesTitle}>Entertainment</h1>
          <h4 className={styles.activitiesText}>
            Beyond the cars, there are often music performances, parties, and
            other entertainment options to keep the atmosphere lively.
          </h4>

          <h1 className={styles.activitiesTitle}>Vendors and Exhibitors</h1>
          <h4 className={styles.activitiesText}>
            Numerous vendors and exhibitors attend, offering car parts,
            accessories, tuning services, and BMW-related merchandise.
          </h4>

          <h1 className={styles.activitiesTitle}>Awards</h1>
          <h4 className={styles.activitiesText}>
            The event typically concludes with awards for various categories,
            such as best car, best modification, and more.
          </h4>

          <h1 className={styles.ticketPricesTitle}>Ticket prices:</h1>

          <h2 className={styles.ticketTitle}>Day Ticket:</h2>
          <h4 className={styles.ticketText}>
            €20 in advance or €15 at the door, which includes entry for one
            person and one car.
          </h4>

          <h2 className={styles.ticketTitle}>3-Day Tickets:</h2>
          <h4 className={styles.ticketText}>
            €30 in advance or €50 at the door.
          </h4>

          <h2 className={styles.ticketTitle}>4-Day Tickets:</h2>
          <h4 className={styles.ticketText}>
            €60 in advance or €100 at the door.
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
            <img src={GalleryImage5} alt="Gallery_Image5" />
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
