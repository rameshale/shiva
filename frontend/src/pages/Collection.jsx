/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relavent");

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }

    setFilterProducts(productsCopy);
  };

  const sortProduct = () => {
    let fpCopy = filterProducts.slice();

    switch (sortType) {
      case "low-high":
        setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
        break;

      case "high-low":
        setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));
        break;

      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch, products]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  return (
    <>
      <div className="relative  h-[18vw] w-full" aria-hidden="true">
        <div className="absolute left-1/2 -z-10 -translate-x-1/2 text-center text-[16vw] font-bold leading-none before:bg-gradient-to-b before:from-gray-300 before:to-gray-200/30 before:to-80% before:bg-clip-text before:text-transparent before:content-['Collections'] after:absolute after:inset-0 after:bg-gray-300/70 after:bg-clip-text after:text-transparent after:mix-blend-darken after:content-['Collections'] after:[text-shadow:0_1px_0_white]"></div>
        {/* Glow */}
      </div>
      <div className="flex flex-col sm:flex-row gap-1 sm:gap-6 pt-10 border-t">
        {/* Filter Options */}
        <div className="hidden md:block min-w-60  rounded-md px-4 py-2 h-full">
          <div
            // onClick={() => setShowFilter(!showFilter)}
            className="md:text-end flex  md:ml-auto md:self-center gap-2 text-black my-2 text-xl  items-center  cursor-pointer font-light"
          >
            <span className="material-symbols-outlined text-base">tune</span>
            <p className="font-medium">Filters</p>
          </div>
          <Filter
            toggleCategory={toggleCategory}
            toggleSubCategory={toggleSubCategory}
          />
        </div>

        {/* Right Side */}
        <div className="flex-1">
          <div className="flex justify-center sm:justify-between text-base sm:text-2xl mb-4">
            <Title text1={"ALL"} text2={"COLLECTIONS"} />
            {/* Porduct Sort */}
            <span className="hidden md:block">
              <Select onChange={(e) => setSortType(e.target.value)}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort By" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Sort by</SelectLabel>
                    <SelectItem value="relavent">Sort by: Relavent</SelectItem>
                    <SelectItem value="low-high">
                      Sort by: Low to High
                    </SelectItem>
                    <SelectItem value="high-low">
                      Sort by: High to Low
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 gap-y-6">
            {filterProducts.map((item, index) => (
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
      </div>

      <Drawer>
        <DrawerTrigger className="mx-auto w-fit fixed inset-x-0 bottom-10 px-8 ">
          <Button>
            <span className="material-symbols-outlined text-base">tune</span>
            <p className="font-medium">Filter and sort</p>
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>
              <div className="flex justify-center items-center">
                <span className="material-symbols-outlined text-base">
                  tune
                </span>
                <p className="font-medium">Filters</p>
              </div>
            </DrawerTitle>
            {/* <DrawerDescription>This action cannot be undone.</DrawerDescription> */}
          </DrawerHeader>
          <div className="p-4 max-h-[50vh] overflow-auto">
            <Filter
              toggleCategory={toggleCategory}
              toggleSubCategory={toggleSubCategory}
            />
          </div>
          <DrawerFooter>
            <div className="flex justify-around">
              <Button>Apply</Button>
              <DrawerClose>
                <Button variant="outline">Close</Button>
              </DrawerClose>
            </div>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

const Filter = ({ toggleCategory, toggleSubCategory }) => (
  <Accordion type="multiple" collapsible className="w-full">
    <AccordionItem value="item-1">
      <AccordionTrigger className="text-base">Categories</AccordionTrigger>
      <AccordionContent>
        <div className="flex flex-col gap-2 text-sm font-light text-gray-700 space-y-2 ml-2">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="Topwear"
              type="checkbox"
              value={"Topwear"}
              onChange={toggleSubCategory}
            />
            <label
              htmlFor="Topwear"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Top wear
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="Bottomwear"
              type="checkbox"
              value={"Bottomwear"}
              onChange={toggleSubCategory}
            />
            <label
              htmlFor="Bottomwear"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Bottom wear
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="terms"
              type="checkbox"
              value={"Topwear"}
              onChange={toggleSubCategory}
            />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Topwear
            </label>
          </div>
        </div>
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger>Types</AccordionTrigger>
      <AccordionContent>
        <div className="flex flex-col gap-2 text-sm font-light text-gray-700 space-y-2 ml-2">
          <div className="flex items-center space-x-2">
            <Checkbox type="checkbox" value={"Men"} onChange={toggleCategory} />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Men
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              type="checkbox"
              value={"Women"}
              onChange={toggleSubCategory}
            />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Women
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              type="checkbox"
              value={"Kids"}
              onChange={toggleSubCategory}
            />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Kids
            </label>
          </div>
        </div>
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-3">
      <AccordionTrigger className="text-base">Categories</AccordionTrigger>
      <AccordionContent>
        <div className="flex flex-col gap-2 text-sm font-light text-gray-700 space-y-2 ml-2">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="Topwear"
              type="checkbox"
              value={"Topwear"}
              onChange={toggleSubCategory}
            />
            <label
              htmlFor="Topwear"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Top wear
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="Bottomwear"
              type="checkbox"
              value={"Bottomwear"}
              onChange={toggleSubCategory}
            />
            <label
              htmlFor="Bottomwear"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Bottom wear
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="terms"
              type="checkbox"
              value={"Topwear"}
              onChange={toggleSubCategory}
            />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Topwear
            </label>
          </div>
        </div>
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-4">
      <AccordionTrigger>Types</AccordionTrigger>
      <AccordionContent>
        <div className="flex flex-col gap-2 text-sm font-light text-gray-700 space-y-2 ml-2">
          <div className="flex items-center space-x-2">
            <Checkbox type="checkbox" value={"Men"} onChange={toggleCategory} />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Men
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              type="checkbox"
              value={"Women"}
              onChange={toggleSubCategory}
            />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Women
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              type="checkbox"
              value={"Kids"}
              onChange={toggleSubCategory}
            />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Kids
            </label>
          </div>
        </div>
      </AccordionContent>
    </AccordionItem>
  </Accordion>
);

export default Collection;
