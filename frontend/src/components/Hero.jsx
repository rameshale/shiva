import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Image1 from "../assets/images/one.jpg";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <>
      <section className="bg-[#FCF8F1] bg-opacity-30 lg:h-[84vh] flex justify-center items-center">
        <div className="px-4 mx-auto max-w-screen-2xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h1 className="mt-4 text-4xl font-bold text-black lg:mt-4  xl:text-6xl">
                Home Decor Crafted with 💖
              </h1>
              <p className="mt-4 text-base text-black lg:mt-8 sm:text-xl">
                At MOSHA Concepts, every piece tells a story, blending art,
                architecture, and fashion into stunning home decor.
              </p>
              <p className="mt-2 text-base text-black  sm:text-xl">
                Explore our handcrafted collection that transforms your space
                into a reflection of your personality.
              </p>

              <a
                href="#"
                title=""
                className="text-xs px-4 py-2 inline-flex items-center md:px-6 md:py-3 mt-4 font-semibold text-white  hover:text-black transition-all duration-200 bg-black rounded-full lg:mt-8 hover:bg-white focus:bg-yellow-400 hover:outline hover:outline-black
                "
                role="button"
              >
                Discover
                <svg
                  className="h-4 w-4 md:w-6 md:h-6 ml-8 -mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </a>
            </div>

            <div>
              <Carousel
                className="w-full"
                plugins={[
                  Autoplay({
                    delay: 3000,
                  }),
                ]}
              >
                <CarouselContent>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index}>
                      <div className="p-1">
                        <img
                          className="w-full rounded-lg"
                          src={Image1}
                          alt=""
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
