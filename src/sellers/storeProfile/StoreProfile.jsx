import styles from "./StoreProfile.module.scss";
import { arrowDown, uploadGreen, uploadBlack } from "../../PAGES";
import { Link } from "react-router-dom";
import { useStoreProfileContext } from "../../contexts/VendorContext";

const StoreProfile = () => {
  const { storeProfile, handleStoreProfileChange, handleStoreProfileSubmit } =
    useStoreProfileContext();

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
      <form
        className={styles.store_profile_form}
        onSubmit={handleStoreProfileSubmit}
      >
        <div className={styles.store_name}>
          <input
            type="text"
            placeholder="Store Name"
            className={styles.store_name_input}
            name="store_name"
            value={storeProfile.store_name}
            onChange={handleStoreProfileChange}
            required
            minLength={5}
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
            <label htmlFor="store-logo" className={styles.input_file_label}>
              <img src={uploadGreen} alt="upload" />
            </label>
            <input
              type="file"
              className={styles.input_file}
              title="select a file"
              id="store-logo"
              required
            />

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
          <textarea
            className={`root-small ${styles.store_box}`}
            placeholder="About your Store"
            minLength={20}
            maxLength={300}
            required
          ></textarea>
          <span className={`tiny-text ${styles.about_text}`}>
            Let buyers who visit your profile learn more about your business
            (About is limited to 300 characters)
          </span>
        </div>

        <div className={styles.inputs}>
          <div className={styles.input}>
            <select
              id=""
              className={styles.select_input}
              name="num_of_employees"
              value={storeProfile.num_of_employees}
              onChange={handleStoreProfileChange}
              required
            >
              <option value="">Number of Employees</option>
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
              <option value="">4</option>
            </select>
            <img
              src={arrowDown}
              alt="arrow-down"
              className={styles.select_arrow}
            />
          </div>
          <div className={styles.input}>
            <select
              name="state"
              value={storeProfile.state}
              onChange={handleStoreProfileChange}
              id=""
              className={styles.select_input}
              required
            >
              <option value="">State</option>
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
              <option value="">4</option>
            </select>
            <img
              src={arrowDown}
              alt="arrow-down"
              className={styles.select_arrow}
            />
          </div>
          <input
            type="text"
            placeholder="Business Address Line 1"
            className={styles.business_line}
            name="address_line_1"
            value={storeProfile.address_line_1}
            onChange={handleStoreProfileChange}
            required
          />
          <input
            type="text"
            placeholder="Business Address Line 2"
            className={styles.business_line}
            name="address_line_2"
            value={storeProfile.address_line_2}
            onChange={handleStoreProfileChange}
            required
          />
          <span className={`tiny-text ${styles.input_text}`}>
            If you are a Business Entity/Company, indicate the official address
            of the entity. If you are an individual, indicate your address.
          </span>

          <input
            type="number"
            placeholder="Zip Code"
            name="zip_code"
            value={storeProfile.zip_code}
            onChange={handleStoreProfileChange}
            required
          />
          <input
            type="number"
            placeholder="CAC Registration Number"
            name="cac_reg_number"
            value={storeProfile.cac_reg_number}
            onChange={handleStoreProfileChange}
            required
          />
          <div className={styles.cac_certificate}>
            <div className={styles.certificate_box}>
              <label
                htmlFor="cac_certificate"
                className={styles.cac_certificate_label}
              >
                <img src={uploadBlack} alt="upload" />
              </label>
              <input
                type="file"
                className={styles.cac_certificate_file}
                title="select a file"
                id="cac_certificate"
                required
              />
              <span className={`root-text ${styles.upload_text}`}>
                Upload CAC Certificate
              </span>
            </div>
            <div className={`tiny-text ${styles.upload_info}`}>
              Please ensure that the document that you provide includes the list
              of the company ultimate beneficial owners. ImperiumNG reserves the
              right to contact you to confirm beneficial ownership.
            </div>
          </div>

          <button className={styles.button} type="submit">
            Continue
          </button>
        </div>
      </form>
    </section>
  );
};

export default StoreProfile;
