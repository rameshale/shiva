import { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import SearchArea from "./SearchArea";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const { getCartCount, navigate, token, setToken, setCartItems } =
    useContext(ShopContext);

  const logout = () => {
    navigate("/login");
    localStorage.removeItem("token");
    setToken("");
    setCartItems({});
  };

  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] fixed w-full flex items-center justify-between py-5 font-medium left-0 top-0 bg-white z-50">
      <Link to="/">
        <img src={assets.logo} className="w-36" alt="" />
      </Link>

      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p className="font-medium lg:text-lg">HOME</p>
          <hr className="w-2/4 border-none h-[2px] bg-gray-700 hidden " />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p className="font-medium lg:text-lg">COLLECTION</p>
          <hr className="w-2/4 border-none h-[2px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p className="font-medium lg:text-lg">ABOUT</p>
          <hr className="w-2/4 border-none h-[2px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p className="font-medium lg:text-lg">CONTACT</p>
          <hr className="w-2/4 border-none h-[2px] bg-gray-700 hidden" />
        </NavLink>
      </ul>

      <div className="flex items-center gap-6">
        <Sheet>
          <SheetTrigger>
            <img
              src={assets.search_icon}
              className="w-5 cursor-pointer"
              alt=""
            />
          </SheetTrigger>
          <SheetContent>
            <SearchArea />
          </SheetContent>
        </Sheet>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <img
              onClick={() => (token ? null : navigate("/login"))}
              className="w-5 cursor-pointer"
              src={assets.profile_icon}
              alt=""
            />
          </DropdownMenuTrigger>
          {token && (
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem
                className="cursor-pointer "
                onClick={() => navigate("/orders")}
              >
                Orders
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer" onClick={logout}>
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          )}
        </DropdownMenu>
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} className="w-5 min-w-5" alt="" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            {getCartCount()}
          </p>
        </Link>
        <img
          src={assets.menu_icon}
          className="w-5 cursor-pointer sm:hidden"
          alt=""
          onClick={() => setVisible(true)}
        />
      </div>
      <Drawer open={visible}>
        <DrawerContent>
          {visible && (
            <Button
              className="bg-white -top-14 mx-auto  fixed inset-x-0 rounded-full w-10 h-10 flex justify-center items-center z-50 hover:bg-white"
              onClick={() => setVisible(false)}
            >
              <span className="material-symbols-outlined text-black font-medium text-lg ">
                close
              </span>
            </Button>
          )}
          <DrawerHeader>
            <DrawerTitle>Menu</DrawerTitle>
          </DrawerHeader>

          <div className={` bg-white  w-full pb-10`}>
            <div className="flex flex-col">
              <NavLink
                onClick={() => setVisible(false)}
                className="py-2 pl-6 text-lg font-bold "
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                onClick={() => setVisible(false)}
                className="py-2 pl-6 text-lg font-bold "
                to="/collection"
              >
                Collection
              </NavLink>
              <NavLink
                onClick={() => setVisible(false)}
                className="py-2 pl-6 text-lg font-bold "
                to="/about"
              >
                About
              </NavLink>
              <NavLink
                onClick={() => setVisible(false)}
                className="py-2 pl-6 text-lg font-bold "
                to="/contact"
              >
                Contact
              </NavLink>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default Navbar;
