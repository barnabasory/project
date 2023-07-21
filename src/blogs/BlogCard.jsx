import styles from "./BlogCard.module.scss";
import { bgImg } from "../PAGES";
import { twitterLight, linkedInLight } from "../PAGES/blog";
import data from "./data";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    <section className={`sw ${styles.wrapper}`}>
      <div className={styles.blogs}>
        {data.map((card) => (
          <div className={styles.blog_card} key={crypto.randomUUID()}>
            <img src={bgImg} alt="" className={styles.image1} />
            <div className={styles.text}>
              <Link to={`/blog/${crypto.randomUUID()}`}>
                <h5>{card.title}</h5>
              </Link>
              <span>{card.description}</span>
              <div className={styles.snippet}>
                <div className={styles.date}>{card.date}</div>
                <div className={styles.social_media}>
                  <img src={twitterLight} alt="" />
                  <img src={linkedInLight} alt="" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogCard;
