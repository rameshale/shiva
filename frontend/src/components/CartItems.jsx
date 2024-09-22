/* eslint-disable react/prop-types */
import { ShopContext } from "@/context/ShopContext";
import { useContext, useEffect, useState } from "react";
import { Input } from "./ui/input";
import { assets } from "../assets/assets";
import Title from "./Title";
import { Badge } from "./ui/badge";

const CartItems = () => {
  const { products, currency, cartItems, updateQuantity } =
    useContext(ShopContext);
  const [cartData, setCartData] = useState([]);
  let totalItems =
    cartData.length > 0
      ? cartData.reduce((acc, item) => {
          return acc + item.quantity;
        }, 0)
      : 0;
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
    <div>
      <div className=" flex items-center text-2xl mb-3">
        <Title text1={"YOUR"} text2={"CART"} />
        <Badge className={"ml-2 -mt-3"}>{totalItems}</Badge>
      </div>
      {cartData.map((item, index) => {
        const productData = products.find(
          (product) => product._id === item._id
        );

        return (
          <div
            key={index}
            className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
          >
            <div className=" flex items-start gap-6">
              <img className="w-16 sm:w-20" src={productData.image[0]} alt="" />
              <div>
                <p className="text-xs sm:text-lg font-medium">
                  {productData.name}
                </p>
                <div className="flex items-center gap-5 mt-2">
                  <p>
                    {currency}
                    {productData.price}
                  </p>
                  {/* <p className="px-2 sm:px-3 sm:py-1 border bg-slate-50">
                        {item.size}
                      </p> */}
                </div>
              </div>
            </div>
            <Input
              onChange={(e) =>
                e.target.value === "" || e.target.value === "0"
                  ? null
                  : updateQuantity(item._id, item.size, Number(e.target.value))
              }
              className="min-w-16 max-w-16 sm:p-2"
              type="number"
              min={1}
              defaultValue={item.quantity}
            />

            <img
              onClick={() => updateQuantity(item._id, item.size, 0)}
              className="w-4 mr-4 sm:w-5 cursor-pointer"
              src={assets.bin_icon}
              alt=""
            />
          </div>
        );
      })}
    </div>
  );
};

export default CartItems;
