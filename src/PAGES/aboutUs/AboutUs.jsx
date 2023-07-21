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

import { Diesel } from "../about";

const AboutUs = () => {
  return (
    <div style={{ overflowX: "hidden" }}>
      <TopSnippet />
      <Navbar />
      <AboutHero />
      <AboutAfterHero />
      <Diesel />
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
