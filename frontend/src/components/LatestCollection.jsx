import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProductItem from "./ProductItem";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, [products]);

  return (
    <section className="relative ">
      <div className="container relative mt-16">
        <div className="grid grid-cols-1 justify-center text-center mb-6">
          <h5 className="font-semibold text-3xl leading-normal mb-4">
            New Arrivals
          </h5>
          <p className="text-slate-400 max-w-xl mx-auto">
            Shop the latest products from the most popular collections
          </p>
        </div>

        <Carousel className="w-full">
          <CarouselContent className="-ml-1">
            {products.map((item, index) => (
              <CarouselItem
                key={index}
                className="pl-1 basis-2/3 sm:basis-2/5 md:basis-[28%]"
              >
                <ProductItem
                  key={index}
                  name={item.name}
                  id={item._id}
                  price={item.price}
                  image={item.image}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default LatestCollection;
