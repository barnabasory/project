import styles from "./Faqs.module.scss";
import { close_faq, open_faq } from "../../PAGES/productPage";
import data from "../faqs/data";
import { useState } from "react";

const Faqs = () => {
  const [showFaq, setShowFaq] = useState(false);
  const [faqs, setFaqs] = useState(
    data.map((faq) => ({ ...faq, showFaq: false }))
  );

  const toggleShowFaq = (id) => {
    setFaqs((prevFaqs) =>
      prevFaqs.map((faq) =>
        faq.id === id ? { ...faq, showFaq: !faq.showFaq } : faq
      )
    );
  };
  return (
    <section className={styles.wrapper}>
      <span className={styles.heading}>FAQs</span>
      <div className={styles.line_break}></div>
      <div className={styles.faqs}>
        {faqs.map((faq) => (
          <div
            className={styles.faq}
            key={faq.id}
            onClick={() => toggleShowFaq(faq.id)}
          >
            <span className={styles.title}>
              {faq.title}
              <div className={styles.icons}>
                {showFaq && <img src={close_faq} alt="close_faq" />}
                {!showFaq && <img src={open_faq} alt="close_faq" />}
              </div>
            </span>

            {faq.showFaq && (
              <p
                className={`root-small ${styles.text}`}
                onClick={() => toggleShowFaq(faq.id)}
              >
                {faq.text}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faqs;
