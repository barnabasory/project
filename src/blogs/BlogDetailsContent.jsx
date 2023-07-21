import styles from "./BlogDetailsContent.module.scss";
import { blogHero, blogDetailsImage } from "../PAGES/blog";

const BlogDetailsContent = () => {
  return (
    <div className={`fw ${styles.wrapper}`}>
      <div className={`fw ${styles.inner_wrapper}`}>
        <div className={styles.hidden_container}></div>
        <div className={`sw ${styles.container}`}>
          <div className={styles.content}>
            <h2>This is a really simple and Awesome blog post</h2>
            <div className={`tiny-text-bold ${styles.header_snippet}`}>
              Home / Blog / This is a fantastic blog post
            </div>
          </div>
          <div className={styles.image_div}>
            <img src={blogHero} alt="hero" />
          </div>
        </div>
      </div>
      <div className={`fw ${styles.text_div}`}>
        <div className={styles.hidden}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam eum
          rem itaque voluptates impedit, dolor exercitationem. Eos, quod iste
          quasi aspernatur similique sequi, neque nesciunt, veritatis sunt qui
          repellat illum quisquam eveniet voluptates et laborum! Deserunt sint
          tempore numquam unde voluptates minima et blanditiis, nisi officia est
          vel provident earum?
        </div>
        <div className={`sw ${styles.text_details_wrapper}`}>
          <div className={styles.text_details}>
            <div className={styles.links}>
              <ul className={`root-text-bold ${styles.ul}`}>
                Like this Post? Share it:
                <li>Twitter</li>
                <li>LinkedIn</li>
                <li>Medium</li>
              </ul>
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>

            <p>
              <span>Why do we use it?</span> It is a long established fact that
              a reader will be distracted by the readable content of a page when
              looking at its layout. The point of using Lorem Ipsum is that it
              has a more-or-less normal distribution of letters, as opposed to
              using 'Content here, content here', making it look like readable
              English. Many desktop publishing packages and web page editors now
              use Lorem Ipsum as their default model text, and a search for
              'lorem ipsum' will uncover many web sites still in their infancy.
              Various versions have evolved over the years, sometimes by
              accident, sometimes on purpose (injected humour and the like).
            </p>

            <div className={styles.image_div}>
              <img src={blogDetailsImage} alt="a house" />
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>

            <p>
              <span>Why do we use it?</span> It is a long established fact that
              a reader will be distracted by the readable content of a page when
              looking at its layout. The point of using Lorem Ipsum is that it
              has a more-or-less normal distribution of letters, as opposed to
              using 'Content here, content here', making it look like readable
              English. Many desktop publishing packages and web page editors now
              use Lorem Ipsum as their default model text, and a search for
              'lorem ipsum' will uncover many web sites still in their infancy.
              Various versions have evolved over the years, sometimes by
              accident, sometimes on purpose (injected humour and the like).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsContent;
