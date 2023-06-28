import styles from "./Summary.module.scss";
import { Link } from "react-router-dom";
import { arrowLeft } from "../../PAGES";

const Summary = () => {
  return (
    <section className={`sw ${styles.wrapper}`}>
      <Link to="/vendor-deposit-method" className={styles.previous_page}>
        <img src={arrowLeft} alt="Go Back" className={styles.arrowLeft} />
        <span className={`root-text ${styles.go_back}`}>Back</span>
      </Link>
      <div className={styles.links}>
        <div className={styles.green_link}>
          <div className={styles.green_number}>1</div>
          <h6>Store Profile</h6>
        </div>
        <div className={styles.green_link}>
          <div className={styles.green_number}>2</div>
          <h6>Seller Profile</h6>
        </div>
        <div className={styles.green_link}>
          <div className={styles.green_number}>3</div>
          <h6>Deposit Method</h6>
        </div>
        <div className={styles.link}>
          <div className={styles.number}>4</div>
          <h6>Summary</h6>
        </div>
      </div>

      {/* <form className={` root-text ${styles.seller_form}`}>
        <div className={styles.store_name_div}>
          <span className={styles.store_name_key}>Store Name:</span>
          <span className={styles.store_name_value}>Rocket Mission Store</span>
        </div>
        <div className={styles.sellers_hr}></div>
        <div className={styles.store_logo_div}>
          <img src="" alt="" className={styles.store_logo} />
          <span className={styles.store_logo_info}>
            We HIGHLY recommended that you upload your logo in the .PNG format.
            it offers better image quality for limited color images such as a
            logo. Additionally, you can save a PNG file with transparency, which
            can be used to match the logo's background with the StoreFront's
            colors perfectly. if you don’t have a logo, pick any avatar you
            like.
          </span>
        </div>
        <div className={styles.sellers_hr}></div>
        <div className={styles.num_of_employees_div}>
          <span className={styles.num_of_employees_key}>
            Number of Employees:
          </span>
          <span className={styles.num_of_employees_value}>8-10</span>
        </div>
        <div className={styles.sellers_hr}></div>
        <div className={styles.state_div}>
          <span className={styles.state_key}>State:</span>
          <span className={styles.state_value}>Adamawa</span>
        </div>
        <div className={styles.sellers_hr}></div>
        <div className={styles.address_line_1_div}>
          <span className={styles.address_line_1_key}>Address Line 1</span>
          <span className={styles.address_line_1_value}>
            No 13 Bat cave avenue rocket space, Nigeria
          </span>
        </div>
        <div className={styles.sellers_hr}></div>
        <div className={styles.address_line_2_div}>
          <span className={styles.address_line_2_key}>Address Line 2</span>
          <span className={styles.address_line_2_value}>
            No 13 Bat cave avenue rocket space, Nigeria
          </span>
        </div>
        <div className={styles.sellers_hr}></div>
        <div className={styles.zipcode_div}>
          <span className={styles.zipcode_key}>Zip Code</span>
          <span className={styles.zipcode_value}>13453</span>
        </div>
        <div className={styles.sellers_hr}></div>
        <div className={styles.cac_num_div}>
          <span className={styles.cac_num_key}>CAC Registration Number</span>
          <span className={styles.cac_num_value}>134533553</span>
        </div>
        <div className={styles.sellers_hr}></div>
        <div className={styles.upload_cac_div}>
          <span className={styles.upload_cac_key}>Upload CAC Certificate</span>
          <span className={styles.upload_cac_value}>
          Upload CAC Certificate
            Uploaded, Pending Approval
          </span>
        </div>
        <div className={styles.sellers_hr}></div>
        <div className={styles.first_name_div}>
          <span className={styles.first_name_key}>First Name</span>
          <span className={styles.first_name_value}>James</span>
        </div>
        <div className={styles.sellers_hr}></div>
        <div className={styles.last_name_div}>
          <span className={styles.last_name_key}>Last Name</span>
          <span className={styles.last_name_value}>Taylor</span>
        </div>
        <div className={styles.sellers_hr}></div>
        <div className={styles.email_div}>
          <span className={styles.email_key}>Email</span>
          <span className={styles.email_value}>jamesjohndoe@user.com</span>
        </div>
        <div className={styles.sellers_hr}></div>
        <div className={styles.phone_div}>
          <span className={styles.phone_key}>Phone Number</span>
          <span className={styles.phone_value}>(+234) 29838211222</span>
        </div>
        <div className={styles.sellers_hr}></div>
        <div className={styles.password_div}>
          <span className={styles.password_key}>Phone Number</span>
          <span className={styles.password_value}>(+234) 29838211222</span>
        </div>
        <div className={styles.sellers_hr}></div>
        <Link to="/vendor-deposit-method">
          <button className={styles.button}>Looks Good - Sign me up</button>
        </Link>
      </form> */}
      <form className={` root-text ${styles.seller_form}`}>
        <table>
          <tr>
            <td>Store Name:</td>
            <td>Rocket Mission Store</td>
          </tr>
          <tr>
            <td>Store Logo:</td>
            <td className={`very-tiny ${styles.logo_info}`}>
              <img src="" alt="" className={styles.store_logo} />
              We HIGHLY recommended that you upload your logo in the .PNG
              format. it offers better image quality for limited color images
              such as a logo. Additionally, you can save a PNG file with
              transparency, which can be used to match the logo's background
              with the StoreFront's colors perfectly. if you don’t have a logo,
              pick any avatar you like.
            </td>
          </tr>
          <tr>
            <td> Number of Employees:</td>
            <td>8-10</td>
          </tr>
          <tr>
            <td>State:</td>
            <td>Adamawa</td>
          </tr>
          <tr>
            <td>Address Line 1</td>
            <td>No 13 Bat cave avenue rocket space, Nigeria</td>
          </tr>
          <tr>
            <td>Address Line 1</td>
            <td>No 13 Bat cave avenue rocket space, Nigeria</td>
          </tr>
          <tr>
            <td>Zip Code</td>
            <td>13453</td>
          </tr>
          <tr>
            <td>CAC Registration Number</td>
            <td>12339994</td>
          </tr>
          <tr>
            <td>Upload CAC Certificate</td>
            <td> Uploaded, Pending Approval</td>
          </tr>
          <tr>
            <td>First Name</td>
            <td>James</td>
          </tr>
          <tr>
            <td>Last Name</td>
            <td>Taylor</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>johndoe@gmail.com</td>
          </tr>
          <tr>
            <td>Phone Number</td>
            <td>(+234) 29838211222</td>
          </tr>
          <tr>
            <td>Phone Number</td>
            <td>Taylor</td>
          </tr>
          <Link to="/vendor-deposit-method">
            <button className={styles.button}>Looks Good - Sign me up</button>
          </Link>
        </table>
      </form>
    </section>
  );
};

export default Summary;
