import { useState } from "react";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "Services",
    title: "Services",
  },
  {
    id: "HowItWorks",
    title: "HowItWorks",
  },
  {
    id: "WhyChooseUs",
    title: "WhyChooseUs",
  },
  {
    id: "contact",
    title: "ContactUs",
  },
];

const handleScroll = (id) => {
  
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "center" });
    setActive(id); // Update active state
    setToggle(false); // Close mobile menu
  }
};


const Navbar = () => {
  const [active, setActive] = useState("home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full bg-gradient-to-r from-purple-500 to-blue-500 px-5 flex justify-between items-center navbar sticky top-0 z-50">
      {/* Logo */}
      <img src="./public/logo2.png"
       className="h-20 w-20"
      alt="" />

      {/* Desktop Navigation */}
      <ul className="list-none px-5 py-5 sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`border-2 rounded-md p-2  text-md font-medium cursor-pointer ${
              active === nav.id ? "text-white" : "text-gray-700"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => {
              setActive(nav.id); // Fix: Use nav.id instead of nav.title for consistency
              handleScroll(nav.id);
            }}
          >
            {nav.title}
          </li>
        ))}
      </ul>

      {/* Mobile Navigation */}
      <div className="p-4 sm:hidden flex flex-1 justify-end items-center">
        <img
          src="../public/menus.png"
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        {/* Sidebar (Mobile Menu) */}
<div
  className={`${
    !toggle ? "hidden" : "flex"
  } p-6 bg-black absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
>
  <ul className="list-none flex justify-end items-start flex-1 flex-col">
    {navLinks.map((nav, index) => (
      <li
        key={nav.id}
        className={`  text-xl font-medium cursor-pointer ${
          active === nav.title ? "text-white" : "text-gray-600"
        } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
        onClick={() => {
          setActive(nav.id); // Fix: Use nav.id instead of nav.title for consistency
          handleScroll(nav.id);
        }}
      >
        <a>{nav.title}</a>
      </li>
    ))}
  </ul>
</div>

      </div>
    </nav>
  );
};

export default Navbar;