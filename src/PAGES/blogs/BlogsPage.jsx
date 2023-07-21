import { Footer, Navbar, TopSnippet } from "../../PAGES";
import { BlogCard } from "../blog";
import styles from "./BlogsPage.module.scss";
import { solarArray } from "../blog";

const BlogsPage = () => {
  return (
    <div className={`fw ${styles.container}`}>
      <TopSnippet />
      <Navbar />
      <section className={`sw ${styles.updates}`}>
        <h3>Blog Updates</h3>
        <div className={styles.image_div}>
          <div className={styles.image}>
            <img src={solarArray} alt="solar-array" />
          </div>
          <div className={styles.text_div}>
            <div className={styles.text}>
              <h4>This is a really Awesome blog post</h4>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu,
                ultricies turpis aenean ullamcorper. Posuere pellentesque nunc
                massa ante sollicitudin neque. Eget ut sit enim sed pulvinar
                viverra aliquet pellentesque. Volutpat facilisis vel.
              </span>
            </div>
            <div className={`root-text-bold ${styles.social_media}`}>
              <span>Share:</span>
              <span>Twitter</span>
              <span>LinkedIn</span>
            </div>
          </div>
        </div>
      </section>

      <BlogCard />
      <Footer />
    </div>
  );
};

export default BlogsPage;
