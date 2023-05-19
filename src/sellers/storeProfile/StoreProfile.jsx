import styles from "./StoreProfile.module.scss";
import { arrowDown, uploadGreen, uploadBlack } from "../../PAGES";

const StoreProfile = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.links}>
        <div className={styles.link}>
          <div className={styles.number}>1</div>
          <h6 className={styles.title}>Store Profile</h6>
        </div>
        <div className={styles.link}>
          <div className={styles.number}>2</div>
          <h6 className={styles.title}>Seller Profile</h6>
        </div>
        <div className={styles.link}>
          <div className={styles.number}>3</div>
          <h6 className={styles.title}>Deposit Method</h6>
        </div>
        <div className={styles.link}>
          <div className={styles.number}>4</div>
          <h6 className={styles.title}>Summary</h6>
        </div>
      </div>
      <form className={styles.store_profile_form}>
        <div className={styles.store_name}>
          <input
            type="text"
            placeholder="Store Name"
            className={styles.store_name_input}
          />
          <div className={`tiny-text ${styles.info}`}>
            This is the name that will appear on the Imperium marketplace!
            please refrain from using registered trademarks in your store name.
            If you are a Business Entity/Company, indicate your legal
            name/company name
          </div>
        </div>
        <div className={styles.store_logo}>
          <div className={styles.upload_box}>
            <input
              type="file"
              className={styles.input_file}
              title="select a file"
            />
            <img src={uploadGreen} alt="upload" />
            <span className={`root-text ${styles.upload_text}`}>
              Upload Store Logo
            </span>
          </div>

          <div className={`tiny-text ${styles.upload_info}`}>
            We HIGHLY recommended that you upload your logo in the .PNG format.
            it offers better image quality for limited color images such as a
            logo. Don’t have a logo, no problem, Imperium will generate a nice
            display picture for you. You can change this anytime in your account
            settings.
          </div>
        </div>
        <div className={styles.about_store}>
          <textarea className={styles.store_box}></textarea>
          <span className={`tiny-text ${styles.about_text}`}>
            Let buyers who visit your profile learn more about your business
            (About is limited to 300 characters)
          </span>
        </div>

        <div className="inputs">
          <div className={styles.input}>
            <select name="" id="">
              <option value="">Number of Employees</option>
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
              <option value="">4</option>
            </select>
            <img src={arrowDown} alt="arrow-down" />
          </div>
          <div className={styles.input}>
            <select name="" id="">
              <option value="">State</option>
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
              <option value="">4</option>
            </select>
            <img src={arrowDown} alt="arrow-down" />
          </div>
          <div className={styles.input}>
            <input type="text" placeholder="Business Address Line 1" />
          </div>
          <div className={styles.input}>
            <input type="text" placeholder="Business Address Line 2" />
          </div>
          <span className={`tiny-text ${styles.input_text}`}>
            If you are a Business Entity/Company, indicate the official address
            of the entity. If you are an individual, indicate your address.
          </span>
          <div className={styles.input}>
            <input type="text" placeholder="Zip Code" />
            <input type="text" placeholder="CAC Registration Number" />
            <div className={styles.cac_certificate}>
              <div className="certificate_box">
                <img src={uploadBlack} alt="upload" />
                <span className={`root-text ${styles.upload_text}`}>
                  Upload CAC Certificate
                </span>
              </div>
              <div className={`tiny-text ${styles.upload_info}`}>
                Please ensure that the document that you provide includes the
                list of the company ultimate beneficial owners. ImperiumNG
                reserves the right to contact you to confirm beneficial
                ownership.
              </div>
            </div>
            <button className={styles.button}>Continue</button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default StoreProfile;
