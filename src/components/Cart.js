import { useDispatch, useSelector } from "react-redux";
import CategoryList from "./CategoryList";
import { clearCart } from "../utils/cartSlice";
import cookingAnimation from "../../images/cooking.json";
import Lottie from "lottie-react";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className=" m-4 p-4">
      {cartItems.length != 0 ? (
        <h1 className="text-2xl mb-10 text-center"> Your Cart</h1>
      ) : (
        ""
      )}

      <div className="w-6/12 m-auto">
        <CategoryList list={cartItems} />
        {cartItems.length == 0 ? (
          <div className="h-24 w-96 m-auto">
            <Lottie animationData={cookingAnimation} loop={true} />
            <h1 className="text-xl text-center"> Your Cart is Empty! </h1>
            <h3 className="text-slate-400">
              You can got to the home page to view more restaurants
            </h3>
          </div>
        ) : (
          <div className="mt-5 flex items-start justify-between">
            <button
              className="bg-red-400 p-2 rounded text-white"
              onClick={handleClearCart}
            >
              Clear Cart
            </button>
            <button className="bg-green-400 p-2 rounded">
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
