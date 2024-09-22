import { useContext, useState } from "react";
import { Input } from "./ui/input";
import { ShopContext } from "@/context/ShopContext";
import ProductItem from "./ProductItem";

const SearchArea = () => {
  const [keyword, setKeyword] = useState("");
  const { products } = useContext(ShopContext);
  return (
    <div>
      {/* remove outline foucus */}
      <Input
        placeholder="Search for..."
        className="text-lg font-bold placeholder:text-[#939393] tracking-wide p-0 border-0 shadow-none focus-visible:ring-0 border-b-2 border-black rounded-none"
        onChange={(e) => setKeyword(e.target.value)}
      />

      {keyword ? (
        <div className="w-full">
          <h1 className="text-base font-medium ">Products</h1>
          <div className="grid grid-cols-1 pt-2">
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
        </div>
      ) : (
        <div className="my-3">
          <h1 className="text-base font-medium  mb-2 ">Popular</h1>

          <div className="flex flex-col space-y-1">
            <p className="font-bold text-lg">Collection 1</p>
            <p className="font-bold text-lg">Collection 3</p>
            <p className="font-bold text-lg">Collection 3</p>
            <p className="font-bold text-lg">Collection 3</p>
            <p className="font-bold text-lg">Collection 3</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchArea;
