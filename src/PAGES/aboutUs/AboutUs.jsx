import styles from "./AboutUs.module.scss";

import {
  AboutAfterHero,
  AboutEvaluation,
  AboutFeatured,
  AboutGlobal,
  AboutHero,
  AboutPartnership,
  AboutSolutions,
  Calculate,
  Contact,
  Footer,
  Navbar,
  TopSnippet,
} from "../index";

const AboutUs = () => {
  return (
    <div>
      <TopSnippet />
      <Navbar />
      <AboutHero />
      <AboutAfterHero />
      <AboutEvaluation />
      <AboutSolutions />
      <AboutPartnership />
      <AboutFeatured />
      <AboutGlobal />
      <Contact />
      <Calculate />
      <Footer />
    </div>
  );
};

export default AboutUs;
