import { clearCart } from "../utilities/cartSlice";
import { useDispatch } from "react-redux";
import Itemlist from "./Itemlist";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log("cart items --> ", cartItems);
  const dispatch = useDispatch();
  const handleclearcart = () => {
    dispatch(clearCart);
  };
  return (
    <div className=" text-center m-4 p-4">
      <h1 className="font-bold text-2xl ">carts</h1>
      <div className=" w-6/12 m-auto">
        {cartItems.length === 0 && <h2>Your cart is empty</h2>}
        <button
          className="m-4 p-4 bg-black text-white rounded-lg"
          onClick={handleclearcart}
        >
          clear cart
        </button>
        {cartItems?.map((cartItem) => (
          <Itemlist key={cartItem?.id} info={cartItem} />
        ))}
      </div>
    </div>
  );
};
export default Cart;
