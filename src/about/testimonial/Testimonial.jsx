import styles from "./Testimonial.module.scss";
import { play_video, light_blockquote } from "../../PAGES/about";

const Testimonial = ({ title, name, profession, testimony, image }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.customer_info}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.customer_meta_data}>
          <span className={`root-text-bold ${styles.customer_name}`}>
            {name}
          </span>
          <span>{profession}</span>
        </div>
      </div>
      <div className={styles.video_text_and_screen}>
        <div className={styles.video_text_card}>
          <img
            src={light_blockquote}
            alt="light_blockquote"
            className={styles.light_blockquote}
          />
          <div className={styles.video_text}>
            <p>{testimony}</p>
            <span>{name}</span>
          </div>
          <div className={styles.play_video}>
            <img src={play_video} alt="" className={styles.play_video_icon} />
            <small className={styles.play_video_text}>Play Video</small>
          </div>
        </div>
        <div className={styles.video_text_card_hidden_container}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
          corrupti accusamus quibusdam possimus voluptatum quis molestias eius
          reprehenderit sapiente quisquam!
        </div>
      </div>
      <div className={styles.video_container}>
        <div className={styles.video_hidden_container}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          pariatur tenetur sequi quod culpa, rerum laboriosam totam maxime
          debitis reiciendis.
        </div>
        <div className={styles.video_div}>
          <img
            src={image}
            className={styles.video}
            alt="customer's_testimony"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
