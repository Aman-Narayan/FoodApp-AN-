import { useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import ItemList from "./ItemList";
import { useDispatch } from "react-redux";
import HeadingComponent from "./Header";
import Footer from "./Footer";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  // console.log(cartItems);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <>
      <HeadingComponent />
      <div className="cart-container">
        <h1 className="cart-title">Cart</h1>
        <div className="cart-items-wrapper">
          <button className="clear-cart-button" onClick={handleClearCart}>
            Clear Cart
          </button>
          {cartItems?.length === 0 && (
            <h1 className="empty-cart-message">
              {" "}
              Cart is empty. Add Items to the cart!
            </h1>
          )}
          <ItemList items={cartItems} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
