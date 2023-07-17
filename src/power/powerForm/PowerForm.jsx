import styles from "./PowerForm.module.scss";
import { arrowDown } from "../../PAGES";

const PowerForm = () => {
  return (
    <div>
      {" "}
      <form className={styles.form}>
        <div className={styles.inputs}>
          <div className={styles.left}>
            <label htmlFor="first-name">
              First Name
              <input type="text" placeholder="John" />
            </label>
            <label htmlFor="email-address">
              Email Address
              <input type="text" placeholder="example@mail.com" />
            </label>
            <label htmlFor="">
              Contact preference
              <select name="" id="">
                <option value="contact-preference">Contact preference</option>
              </select>
              <img src={arrowDown} alt="arrow-down" />
            </label>
            <label htmlFor="house-number">
              House Number
              <input type="number" placeholder="12" />
            </label>
            <label class="control-label">
              State of Origin
              <select name="state" id="state">
                <option value="" selected="selected">
                  - Select -
                </option>
                <option value="Abia">Abia</option>
                <option value="Adamawa">Adamawa</option>
                <option value="AkwaIbom">AkwaIbom</option>
                <option value="Anambra">Anambra</option>
                <option value="Bauchi">Bauchi</option>
                <option value="Bayelsa">Bayelsa</option>
                <option value="Benue">Benue</option>
                <option value="Borno">Borno</option>
                <option value="Cross River">Cross River</option>
                <option value="Delta">Delta</option>
                <option value="Ebonyi">Ebonyi</option>
                <option value="Edo">Edo</option>
                <option value="Ekiti">Ekiti</option>
                <option value="Enugu">Enugu</option>
                <option value="FCT">FCT</option>
                <option value="Gombe">Gombe</option>
                <option value="Imo">Imo</option>
                <option value="Jigawa">Jigawa</option>
                <option value="Kaduna">Kaduna</option>
                <option value="Kano">Kano</option>
                <option value="Katsina">Katsina</option>
                <option value="Kebbi">Kebbi</option>
                <option value="Kogi">Kogi</option>
                <option value="Kwara">Kwara</option>
                <option value="Lagos">Lagos</option>
                <option value="Nasarawa">Nasarawa</option>
                <option value="Niger">Niger</option>
                <option value="Ogun">Ogun</option>
                <option value="Ondo">Ondo</option>
                <option value="Osun">Osun</option>
                <option value="Oyo">Oyo</option>
                <option value="Plateau">Plateau</option>
                <option value="Rivers">Rivers</option>
                <option value="Sokoto">Sokoto</option>
                <option value="Taraba">Taraba</option>
                <option value="Yobe">Yobe</option>
                <option value="Zamfara">Zamafara</option>
              </select>
              <img src={arrowDown} alt="arrow-down" />
            </label>
          </div>
          <div className={styles.right}>
            <label htmlFor="last-name">
              Last Name
              <input type="text" placeholder="Doe" />
            </label>
            <label htmlFor="phone-number">
              Phone Number
              <input type="number" placeholder="000 0000 000" />
            </label>
            <label htmlFor="contact-date-of-birth">
              Contact Date of Birth
              <input type="date" placeholder="DD/MM/YYYY" />
            </label>
            <label htmlFor="first-name">
              Street Number
              <input type="number" placeholder="20" />
            </label>
            <label htmlFor="">
              LGA
              <select id="localGovernmentDropdown">
                <option value="">Select Local Government</option>
                <option value="abeokuta north">Abeokuta North</option>
                <option value="abeokuta south">Abeokuta South</option>
                <option value="ado-odo/ota">Ado-Odo/Ota</option>
                <option value="agbado north">Agbado North</option>
                <option value="agbado south">Agbado South</option>
                <option value="ewekoro">Ewekoro</option>
                <option value="ido-odo">Ido-Odo</option>
                <option value="ijebu east">Ijebu East</option>
                <option value="ijebu north">Ijebu North</option>
                <option value="ijebu north east">Ijebu North East</option>
                <option value="ijebu ode">Ijebu Ode</option>
                <option value="ikenne">Ikenne</option>
                <option value="ilese-ijebu">Ilese-Ijebu</option>
                <option value="imeko-afon">Imeko-Afon</option>
                <option value="ipokia">Ipokia</option>
                <option value="obafemi/owode">Obafemi/Owode</option>
                <option value="odeda">Odeda</option>
                <option value="odogbolu">Odogbolu</option>
                <option value="ogun waterside">Ogun Waterside</option>
                <option value="remo north">Remo North</option>
                <option value="shagamu">Shagamu</option>
              </select>
              <img src={arrowDown} alt="arrow-down" />
            </label>
          </div>
        </div>
        <label htmlFor="notes" className={styles.textarea_label}>
          Notes
          <textarea
            name=""
            id=""
            placeholder="Extra Notes"
            className={`root-small ${styles.textarea}`}
          ></textarea>
        </label>
        <button className={styles.button}>Send Request</button>
        <span className={`root-small ${styles.snippet}`}>
          By clicking the “Send Request” you agree to be contacted by the
          Imperium team.
        </span>
      </form>
    </div>
  );
};

export default PowerForm;
