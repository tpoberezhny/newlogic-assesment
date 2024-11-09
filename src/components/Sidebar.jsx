import React from "react";
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
  const navigate = useNavigate();
  const location = useLocation();

  const handleMenuItemClick = (route) => {
    navigate(route);
  };

  return (
    <aside className="flex flex-col items-center px-6 py-8 bg-white rounded-xl min-w-[240px] w-[304px] max-md:px-5">
      <div className="flex flex-col items-center">
        <h2 style={styles.text3Xl}>
          Daniil Filatov
        </h2>
        <p style={styles.textSm} className="mt-[3px] text-gray-400">
          daniil.filatov@newlogic.cz
        </p>
      </div>
      <nav className="flex flex-col mt-6 w-full">
        <ul className="flex flex-col w-full">
          {menuItemsData.map((item) => (
            <li key={item.id}>
              <button
                className={`flex items-center p-3 mt-3 w-full rounded-lg ${
                  location.pathname === item.route
                    ? "bg-blue-500 text-white"
                    : "text-neutral-900"
                }`}
                onClick={() => handleMenuItemClick(item.route)}
                style={
                  location.pathname === item.route ? styles.textXl : styles.textLg
                } 
              >
                <div className="flex gap-2 items-center w-full">
                  <img
                    src={item.icon}
                    alt={item.label}
                    className="w-5 aspect-square"
                    style={
                      location.pathname === item.route ? styles.filterWhite : {}
                    }
                  />
                  <span style={styles.uiBtnDefault}>{item.label}</span>
                </div>
                <img
                  src={ArrowRight}
                  alt="Arrow to the right"
                  className="w-5 aspect-square"
                  style={
                    location.pathname === item.route ? styles.filterWhite : {}
                  }
                />
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <button className="flex justify-center p-3 mt-6 w-full text-base text-red-500 rounded-lg bg-red-600 bg-opacity-10 max-w-[256px]">
        <span>Odhlásit se</span>
      </button>
    </aside>
  );
}

export default Sidebar;
