// import { useContext, useEffect, useState } from "react";
// import { ShopContext } from "../context/ShopContext";
import { ShopContext } from "@/context/ShopContext";
import { useContext } from "react";
import ProductItem from "./ProductItem";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  // const [bestSeller, setBestSeller] = useState([]);

  // useEffect(() => {
  //   const bestProduct = products.filter((item) => item.bestseller);
  //   setBestSeller(bestProduct.slice(0, 5));
  // }, [products]);

  return (
    <section className="relative mt-44  sm:mt-72">
      <div className="container relative md:mt-24 mt-16">
        <div className="grid items-end md:grid-cols-2 mb-6">
          <div className="md:text-start text-center">
            <h5 className="font-semibold text-3xl leading-normal mb-4">
              Best Seller
            </h5>
            <p className="text-slate-400 max-w-xl">Top sale in this week</p>
          </div>

          <div className="md:text-end hidden md:flex  md:ml-auto md:self-center gap-2 text-black hover:text-orange-500 cursor-pointer font-light">
            <p>See More Items</p>
            <span className="material-symbols-outlined">
              expand_circle_right
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 pt-6 gap-6">
          {products.map((item, index) => (
            <ProductItem
              key={index}
              name={item.name}
              id={item._id}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 mt-6">
          <div className="text-center md:hidden block">
            <a
              href="shop-grid.html"
              className="text-slate-400 hover:text-orange-500"
            >
              See More Items <i className="mdi mdi-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSeller;
