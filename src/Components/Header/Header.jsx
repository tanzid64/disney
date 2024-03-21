import React, { useState } from "react";
import logo from "/images/logo.png";
import { navMenu } from "./data"; // Importing navMenu from data.js
import HeaderItem from "./HeaderItem";
import { HiDotsVertical } from "react-icons/hi";
const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="flex items-center justify-between p-5">
      <div className="flex items-center gap-8">
        {/* Nav Logo */}
        <img src={logo} alt="" className="w-[70px] md:w-[100px] object-cover" />
        {/* Nav Menu */}
        <div className="md:flex items-center gap-8 hidden">
          {navMenu.map((item, index) => (
            <HeaderItem key={index} title={item.title} Icon={item.icon} />
          ))}
        </div>
        {/* Responsive Nav Menu */}
        <div className="flex md:hidden gap-5">
          {navMenu.map(
            (item, index) =>
              index < 3 && (
                <HeaderItem key={index} title={""} Icon={item.icon} />
              )
          )}
          <div className="md:hidden" onClick={() => setToggle(!toggle)}>
            <HeaderItem
              key={"sm-nav-toggle"}
              title={""}
              Icon={HiDotsVertical}
            />
            {toggle ? (
              <div className="absolute mt-3 border-[1px] p-5 bg-gray-800">
                {navMenu.map(
                  (item, index) =>
                    index > 2 && (
                      <HeaderItem
                        key={index}
                        title={item.title}
                        Icon={item.icon}
                      />
                    )
                )}
              </div>
            ) : null}
          </div>
        </div>
      </div>
      {/* Account */}
      <img
        src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png"
        alt=""
        className="w-[40px] rounded-full"
      />
    </div>
  );
};

export default Header;
