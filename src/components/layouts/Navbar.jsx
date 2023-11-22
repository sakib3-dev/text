import React, { useState } from "react";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import Button from "../Button";

const Navbar = () => {
  let Links = [
    { name: "Men", link: "/" },
    { name: "Woman", link: "/" },
    { name: "Kids", link: "/" },
    { name: "Collection", link: "/" },
    { name: "Trends", link: "/" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="container mx-auto">
      <div className="md:flex items-center justify-between bg-transparent py-4 md:px-10">
        {/* logo */}
        <div className="font-Poppins text-[24px] text-black font-semibold cursor-pointer">
          <span>Fresh</span>
        </div>

        {/* menu icon  */}
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7"
        >
          {open ? <FaXmark /> : <FaBarsStaggered />}
        </div>
        {/* linke items */}
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-transparent md:z-50 z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-700 ease-in ${
            open ? "top-12" : "top-[-490px]"}`
          }
        >
          {Links.map((link) => (
            <li className="md:ml-8 md:my-0 my-7 font-semibold">
              <a
                href={link.link}
                className="font-Poppins text-[24px] text-black font-semibold"
              >
                {link.name}
              </a>
            </li>
          ))}

          <Button className="btn ml-5 py-2 px-6 bg-transparent shadow-buttonShadow border border-ButtonBorder rounded-[10px] hover:bg-ButtonBorder duration-700 transition-all ease-in-out font-Poppins text-[24px] text-black font-semibold mr-[10px]" text="Login" />
          <Button className="btn py-2 px-6 bg-transparent shadow-buttonShadow border border-ButtonBorder rounded-[10px] hover:bg-ButtonBorder duration-700 transition-all ease-in-out font-Poppins text-[24px] text-black font-semibold" text="Sign Up" />
        </ul>
        <div className="">
          
        </div>
      </div>
      </div>
    </div>
  );
};

export default Navbar;
