import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const Collections = () => {
  const [showAll, setShowAll] = useState(false);
  return (
    <section className="relative ">
      <div className="container relative  mb-4  md:mt-24 mt-16">
        <div className="grid  md:grid-cols-2 ">
          <div className="md:text-start text-center">
            <h5 className="font-semibold text-3xl leading-normal ">
              Explore the collections
            </h5>
          </div>

          <div
            className="md:text-end hidden md:flex  md:ml-auto md:self-center gap-2 text-black hover:text-orange-500 cursor-pointer font-light"
            onClick={() => {
              setShowAll(!showAll);
            }}
          >
            <p> Show All</p>
            <span className="material-symbols-outlined">
              expand_circle_right
            </span>
          </div>
        </div>

        <Carousel className="w-full mt-4">
          <CarouselContent className="-ml-1">
            {Array.from({ length: 7 }).map((_, index) => (
              <CarouselItem
                key={index}
                className="pl-1 basis-2/3 sm:basis-2/5 md:basis-[22%]"
              >
                <div className="p-1">
                  <div className="group bg-[#f1f1f1] p-8 rounded-sm">
                    <div className="relative  rounded-md duration-500">
                      <img
                        src="https://impact-theme-home.myshopify.com/cdn/shop/files/links-decoration.jpg"
                        className=" group-hover:scale-125 duration-500"
                        alt=""
                      />
                      <div className="absolute group-hover:right-10 -bottom-8 start-3 end-3 duration-500 flex justify-center items-center cursor-pointer">
                        <p className="py-2 px-2 flex font-semibold tracking-wide align-middle duration-500 text-sm text-center   text-black rounded-md ">
                          Decor
                        </p>
                        <span className="hidden group-hover:block material-symbols-outlined text-[16px]">
                          expand_circle_right
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

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

export default Collections;
