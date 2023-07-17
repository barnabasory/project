import { Calculate, Contact, Navbar, TopSnippet, Footer } from "../../PAGES";
import { Sponsor, PowerService } from "../powerService";

const PowerServicePage = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", overflowX: "hidden" }}
    >
      <TopSnippet />
      <Navbar />
      <PowerService />
      <Sponsor />
      <Contact />
      <Calculate />
      <Footer />
    </div>
  );
};

export default PowerServicePage;
