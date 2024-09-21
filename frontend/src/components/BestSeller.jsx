// import { useContext, useEffect, useState } from "react";
// import { ShopContext } from "../context/ShopContext";
import { Badge } from "@/components/ui/badge";

const BestSeller = () => {
  // const { products } = useContext(ShopContext);
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
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="p-1">
              <div className="group">
                <div className="relative overflow-hidden shadow dark:shadow-gray-800 group-hover:shadow-lg group-hover:dark:shadow-gray-800 rounded-md duration-500">
                  <img
                    src="https://shreethemes.in/cartzio/layouts/assets/images/shop/black-print-t-shirt.jpg"
                    className="group-hover:scale-110 duration-500"
                    alt=""
                  />

                  <div className="absolute -bottom-20 group-hover:bottom-3 start-3 end-3 duration-500">
                    <a
                      href="shop-cart.html"
                      className="py-2 px-5 inline-block font-semibold tracking-wide align-middle duration-500 text-base text-center bg-slate-900 text-white w-full rounded-md"
                    >
                      Add to Cart
                    </a>
                  </div>

                  <ul className="list-none absolute top-[10px] end-4 opacity-0 group-hover:opacity-100 duration-500 space-y-1">
                    <li>
                      <a
                        href="javascript:void(0)"
                        className="size-10 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-center rounded-full bg-white text-slate-900 hover:bg-slate-900 hover:text-white shadow"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-heart size-4"
                        >
                          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                        </svg>
                      </a>
                    </li>
                    <li className="mt-1">
                      <a
                        href="shop-item-detail.html"
                        className="size-10 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-center rounded-full bg-white text-slate-900 hover:bg-slate-900 hover:text-white shadow"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-eye size-4"
                        >
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                      </a>
                    </li>
                    <li className="mt-1">
                      <a
                        href="javascript:void(0)"
                        className="size-10 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-center rounded-full bg-white text-slate-900 hover:bg-slate-900 hover:text-white shadow"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-bookmark size-4"
                        >
                          <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                        </svg>
                      </a>
                    </li>
                  </ul>

                  <ul className="list-none absolute top-[10px] start-4">
                    <li>
                      <a
                        href="javascript:void(0)"
                        className="bg-orange-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5"
                      >
                        -40% Off
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="mt-4">
                  <a
                    href="product-detail-one.html"
                    className="hover:text-orange-500 text-lg font-medium"
                  >
                    Black Print T-Shirt
                  </a>
                  <div className="flex justify-between items-center mt-1">
                    <p>
                      $16.00 <del className="text-slate-400">$21.00</del>
                    </p>
                    <Badge className={"-mt-1 mr-2"}>4.5 ⭐ </Badge>
                  </div>
                </div>
              </div>
            </div>
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
