import { Calculate, Footer, Navbar, TopSnippet } from "../../PAGES";
import { Sponsor } from "../powerService";
import styles from "./TermsOfServicePage.module.scss";

const TermsOfServicePage = () => {
  return (
    <div>
      <TopSnippet />
      <Navbar />

      <div className={styles.terms_of_service}>
        <div className={`sw ${styles.terms_of_service_header}`}>
          <h3>How To Buy And Sell On Imperium</h3>
        </div>
      </div>
      <section className={styles.wrapper}>
        <div className={`sw ${styles.terms_of_service_text}`}>
          <div className={styles.how_to_buy}>
            <h4>How to Buy</h4>
            <ul>
              <li>Visit the marketplace</li>
              <li>
                Select the product or solution you require from the catalogue,
                Alternatively, you can click on ‘Go to calculator’ for an
                automated assessment of your energy needs.
              </li>
              <li>
                Input the details of the appliances you would like to power.
              </li>
              <li>
                Select the preferred solution as recommended by the energy
                calculator.
              </li>
              <li>Selected product will be added to your cart</li>
              <li>
                At checkout, you will be prompted to login to your imperium
                account
              </li>
              <li>
                If you do not have an account, you can signup and continue with
                payment
              </li>
              <br />
              <li>
                Choose the preferred mode of payment: Outright payment, Lease to
                own, etc If outright payment is selected, you will be redirected
                to the payment gateway (Flutterwave), and be required to fill in
                your card details, after which purchase will be confirmed
                successful. If lease to own is selected (for product/solution
                less than N2m), you will be redirected to the ‘Pay-With-Specta’
                platform.
              </li>
              <li>
                You can signup to create a Specta ID After filling the necessary
                details on the Pay-With-Specta platform, you will receive an
                invoice with details of your lease agreement.
              </li>
              <br />
              <li>
                You are required to review the terms of the lease agreement.
              </li>
              <li>
                If the terms are suitable, your purchase will be confirmed as
                successful
              </li>
              <li>
                If product/solution less than N2m you will be redirected to a
                form:
              </li>
              <li>Provide the details required</li>
              <li>
                You will be directed to the Sterling Bank branch of your choice.
              </li>
              <li>
                You will be required to submit relevant documents to assess your
                credit worthiness.
              </li>
              <li>
                If the results of the credit check are satisfactory, the loan
                will be approved and funds disbursed, upon agreeing with the
                terms of the loan agreement.
              </li>
              <li>Purchase will be confirmed as successful. </li>
              <li>
                After successful payment, you will receive an email notification
                to this effect.{" "}
              </li>
              <li>
                You will be contacted by Imperium’s administrative officer as
                well as a technical partner (vendor) to verify the details of
                your purchase and make preparations for the installation
                process.
              </li>
              <li>Provide the details required</li>
              <li>Provide the details required</li>
            </ul>
          </div>
          <div className={styles.how_to_sell}>
            <h4>How to Sell</h4>
            <ul>
              <li>
                Scroll down the landing page till you see ‘Become a vendor’, and
                click on signup
              </li>
              <li>
                You will be required to fill the details of your business, level
                of experience, etc. and upload documentation to validate these.
              </li>
              <li>
                The data provided will be assessed to ensure you meet our
                minimum requirements.
              </li>
              <li>
                If your business meets the requirements, you will be notified.
              </li>
              <li>
                Upon agreeing to the terms stated in the SLA and NDA, you will
                then be onboarded on the platform.
              </li>
              <li>You can proceed to upload your product/solutions catalog.</li>
              <li>
                When a customer places an order on an item in your catalog, you
                will receive a notification.
              </li>
              <li>
                You will be contacted by the imperium administrative officer to
                confirm the order placement.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Sponsor />
      <Calculate />
      <Footer />
    </div>
  );
};

export default TermsOfServicePage;
