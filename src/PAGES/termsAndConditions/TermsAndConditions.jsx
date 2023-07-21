import { Calculate, Contact, Footer, Navbar, TopSnippet } from "../../PAGES";
import styles from "./TermsAndConditions.module.scss";

const TermsAndConditions = () => {
  return (
    <div>
      <TopSnippet />
      <Navbar />
      <div>
        <h3 className={`sw ${styles.title}`}>Terms & Conditions</h3>
      </div>
      <div className={`sw ${styles.text}`}>
        <p>
          At Sterling Bank Plc., we take the privacy of your personal
          information seriously and remain committed to protecting and ensuring
          that your Personal Data is treated in a fair and lawful manner in all
          our dealings with you. This Privacy Policy (“Policy”) has been put
          together to explain to you what we do with the personal information
          that you provide to us when you visit our website, while using any of
          our digital or mobile platforms/services, our Mobile Banking App,
          mobile authentication service, when communicating with us through any
          of our social media or other interactive channels or any other
          engagement with us (collectively “Services”).
        </p>
        <br />
        <p>
          Throughout this document, “Sterling”, “Bank”, “we”, “us”, “our” and/or
          “ours” refer to Sterling Bank Plc incorporated under the laws of the
          Federal Republic of Nigeria with its registered office at 20 Sterling
          Towers, 20 Marina, Lagos. The reference to ‘you’ or ‘your’, means you,
          any authorised person on your account, anyone who conducts your
          banking services for you or other related people (including authorised
          signatories, partners or any authorised third party). By continuing to
          visit our websites ( www.sterling.ng ), or using our mobile and
          digital platforms, social media platforms and other Sterling customer
          touch-points and utilising Sterling services, including
          www.imperiumng.com, you accept and consent to the provisions described
          in this Policy.{" "}
        </p>
        <br />
        <p>
          <h5>1. The information we collect about you</h5>
          We gather information from you for a number of reasons. We may need
          you to provide your Personal Information/Data such as your name,
          contact details, identification, work and residential addresses,
          gender, positions held, forms submitted, Bank Verification Number
          (BVN), payment details and other enquiry details which would enhance
          your service experience. The Personal Data we collect, fall into
          various categories, such as:
          <ul>
            <li>
              1. Details about your banking activities and transactions with us.
            </li>
            <li>
              2.This includes information on any bank accounts you use, debit
              card numbers, financial history, information you provide to
              deliver payment initiation services and account information
              services regarding accounts you hold with other providers.
            </li>
          </ul>
        </p>
        <br />
        <p>
          <h5>2. Information on how you use your device/ Usage Data</h5>
          We may also collect information that your browser sends whenever you
          visit our website or banking applications or when you access our
          Services by or through a mobile device (“Usage Data”). This Usage Data
          may include information such as your computer’s Internet Protocol
          address (e.g. IP address), browser type, browser version, the pages of
          our Service that you visit, the time and date of your visit and the
          time spent on those pages amongst other diagnostic data. When you
          access the Service by or through a mobile device or use the mobile
          app, this Usage Data may include information such as the type of
          mobile device you use, your mobile device unique ID, the IP address of
          your mobile device, your mobile operating system, the type of mobile
          Internet browser you use, unique device identifiers and other
          diagnostic data.
        </p>
      </div>
      <Contact />
      <Calculate />
      <Footer />
    </div>
  );
};

export default TermsAndConditions;
