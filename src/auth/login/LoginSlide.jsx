import styles from "./LoginSlide.module.scss";
import { useContext } from "react";
import { CheckedCards } from "../../contexts/Context";
import { Link } from "react-router-dom";

const LoginSlide = () => {
  const { showLogin, setShowLogin } = useContext(CheckedCards);
  return (
    <>
      {showLogin && (
        <>
          <section className={`fw ${styles.wrapper}`}>
            <div
              className={`${styles.login_overlay}`}
              onClick={() => setShowLogin(false)}
            ></div>
            <div className={`${styles.login_div}`}>
              <h5 className={styles.title}>Login to Imperium</h5>
              <form className={styles.form}>
                <div className={styles.inputs}>
                  <input
                    type="text"
                    placeholder="Username"
                    className={styles.input}
                  />
                  <input
                    type="text"
                    placeholder="Password"
                    className={styles.input}
                  />
                </div>
                <div className={styles.actions}>
                  <div className={styles.remember_me}>
                    <input type="checkbox" className={styles.checkbox} />
                    <span className={`root-small`}>Remember me</span>
                  </div>
                  <span className={`root-small`}>I forgot my Password</span>
                </div>
                <button className={styles.button}>Login</button>
              </form>
              <Link to="signup" className={`root-small ${styles.sign_up}`}>
                Don't have an Account? Sign up here
              </Link>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default LoginSlide;
