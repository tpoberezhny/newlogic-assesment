import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "../styles";

//icons
import ShoppingBagIcon from "../assets/icons/shopping-bag.svg";
import DocumentCheckIcon from "../assets/icons/document-check.svg";
import HeartIcon from "../assets/icons/heart.svg";
import CircleStackIcon from "../assets/icons/circle-stack.svg";
import TagIcon from "../assets/icons/tag.svg";
import MagnifyingGlassIcon from "../assets/icons/magnifying-glass.svg";
import SettingsIcon from "../assets/icons/settings.svg";
import ArrowRight from "../assets/icons/chevron-right.svg";

const menuItemsData = [
  {
    id: 1,
    icon: ShoppingBagIcon,
    label: "Moje objednávky",
    route: "/order-management",
  },
  {
    id: 2,
    icon: DocumentCheckIcon,
    label: "Faktury",
    route: "/faktury",
  },
  {
    id: 3,
    icon: HeartIcon,
    label: "Seznam přání",
    route: "/order-managment",
  },
  {
    id: 4,
    icon: CircleStackIcon,
    label: "Věrnostní program",
    route: "/order-managment",
  },
  {
    id: 5,
    icon: TagIcon,
    label: "Slevové kódy",
    route: "/order-managment",
  },
  {
    id: 6,
    icon: MagnifyingGlassIcon,
    label: "Hlídané zboží",
    route: "/order-managment",
  },
  {
    id: 7,
    icon: SettingsIcon,
    label: "Nastavení účtu",
    route: "/settings",
  },
];

function Sidebar() {
  const [activeItem, setActiveItem] = useState(menuItemsData[0].id);
  const navigate = useNavigate();

  const handleMenuItemClick = (id, route) => {
    setActiveItem(id);
    navigate(route);
  };

  return (
    <aside className="flex flex-col items-center px-6 py-8 bg-white rounded-xl min-w-[240px] w-[304px] max-md:px-5">
      <div className="flex flex-col items-center">
        <h2 className="text-xl font-medium leading-7 text-neutral-900">Daniil Filatov</h2>
        <p className="mt-1 text-sm leading-loose text-center text-neutral-500">daniil.filatov@newlogic.cz</p>
      </div>
      <nav className="flex flex-col self-stretch mt-6 w-full text-base font-semibold text-neutral-900">
        <ul className="flex flex-col w-full">
          {menuItemsData.map((item) => (
            <li key={item.id}>
              <button
                className={`flex flex-col justify-center p-3 mt-3 w-full rounded-lg ${
                  activeItem === item.id
                    ? "bg-blue-600 text-white"
                    : "text-neutral-900"
                }`}
                onClick={() => handleMenuItemClick(item.id, item.route)}
              >
                <div className="flex gap-10 justify-between items-center w-full">
                  <div className="flex gap-2 items-center self-stretch my-auto">
                    <img
                      src={item.icon}
                      alt=""
                      className={`object-contain shrink-0 self-stretch my-auto w-5 aspect-square ${
                        activeItem === item.id ? "filter-white" : ""
                      }`}
                    />
                    <span className="self-stretch my-auto">{item.label}</span>
                  </div>
                  <img
                    src={ArrowRight}
                    alt="Arrow to the right"
                    className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
                  />
                </div>
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <button className="flex flex-col justify-center p-3 mt-6 w-full text-base text-red-500 rounded-lg bg-red-600 bg-opacity-10 max-w-[256px]">
        <span className="gap-2 self-stretch my-auto">Odhlásit se</span>
      </button>
    </aside>
  );
}

export default Sidebar;
