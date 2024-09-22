import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import CartTotal from "../components/CartTotal";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import CartItems from "@/components/CartItems";
const SmallCart = () => {
  const { products, cartItems, navigate, showCart, setShowCart } =
    useContext(ShopContext);

  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      const tempData = [];
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            tempData.push({
              _id: items,
              size: item,
              quantity: cartItems[items][item],
            });
          }
        }
      }
      setCartData(tempData);
    }
  }, [cartItems, products]);

  return (
    <Dialog open={showCart}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="font-bold">
            <DialogClose
              className="absolute top-3 right-3 z-30"
              onClick={() => {
                setShowCart(false);
              }}
            >
              <span className="material-symbols-outlined">close</span>
            </DialogClose>
          </DialogTitle>
        </DialogHeader>
        <CartItems />
        <div className="flex justify-end ">
          <div className="w-full sm:w-[450px]">
            <CartTotal />
            <div className=" w-full text-end">
              <button
                onClick={() => {
                  scrollTo(0, 0);
                  navigate("/cart");
                  setShowCart(false);
                }}
                className="bg-black text-white text-sm my-8 px-8 py-3"
              >
                View Cart
              </button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SmallCart;
