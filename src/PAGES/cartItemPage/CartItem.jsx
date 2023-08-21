import styles from "./CartItem.module.scss";
import { Cart, OrderSummary, Links, CartHeader } from "../cart";

const CartItem = () => {
  return (
    <>
      <CartHeader />
      <div className={`sw ${styles.wrapper}`}>
        <div className={styles.links}>
          <Links />
        </div>
        <div className={styles.cart}>
          <Cart />
        </div>
        <div className={styles.order_summary}>
          <OrderSummary />
        </div>
      </div>
    </>
  );
};

export default CartItem;
