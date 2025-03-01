import { useState } from "react";
import { Link } from "react-router";
import {
  BoxCubeIcon,
  GridIcon,
  ListIcon,
  UserIcon,
} from "../icons";
import { useSidebar } from "../context/SidebarContext";

type NavItem = {
  name: string;
  icon: React.ReactNode;
  path: string;
  key: string;
};

const navItems: NavItem[] = [
  {
    icon: <GridIcon />,
    name: "Dashboard",
    path: "/",
    key: "1",
  },
  {
    icon: <UserIcon />,
    name: "Users",
    path: "/",
    key: "2",
  },
  {
    icon: <BoxCubeIcon />,
    name: "Products",
    path: "/",
    key: "3",
  },
  {
    icon: <ListIcon />,
    name: "Inventory",
    path: "/",
    key: "4",
  },
];

const AppSidebar: React.FC = () => {
  const { isExpanded, isMobileOpen, isHovered, setIsHovered } = useSidebar();
  const [selectedKey, setSelectedKey] = useState("1");

  const isActive = (key: string) => {
    return key === selectedKey;
  };

  return (
    <aside
      className={`fixed bg-gray-100 mt-16 flex flex-col lg:mt-0 top-0 px-5 left-0 dark:bg-gray-900 dark:border-gray-800 text-gray-900 h-screen transition-all duration-300 ease-in-out z-50 border-r border-gray-200 
        ${
          isExpanded || isMobileOpen
            ? "w-[290px]"
            : isHovered
            ? "w-[290px]"
            : "w-[90px]"
        }
        ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0 `}
      onMouseEnter={() => !isExpanded && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`py-5 flex items-center gap-2  ${
          !isExpanded && !isHovered ? "lg:justify-center" : "justify-start"
        }`}
      >
        <Link to="/">
          {isExpanded || isHovered || isMobileOpen ? (
            <>
              <img
                className="dark:hidden"
                src="/preview.jpg"
                alt="Logo"
                width={50}
                style={{ borderRadius: "50%" }}
                height={20}
              />
            </>
          ) : (
            <img
              src="/preview.jpg"
              alt="Logo"
              width={32}
              height={32}
              style={{ borderRadius: "50%" }}
            />
          )}
        </Link>
        {isExpanded || isHovered || isMobileOpen ? (
          <span>Company name</span>
        ) : null}
      </div>
      <div className="flex flex-col overflow-y-auto duration-300 ease-linear no-scrollbar">
        <nav className="mb-6">
          <ul className="flex flex-col gap-4">
            {navItems.map((nav) => (
              <li key={nav.key}>
                <span
                  className={`menu-item group ${
                    isActive(nav.key)
                      ? "menu-item-active"
                      : "menu-item-inactive"
                  }`}
                  onClick={() => setSelectedKey(nav.key)}
                >
                  <span
                    className={`menu-item-icon-size ${
                      isActive(nav.key)
                        ? "menu-item-icon-active"
                        : "menu-item-icon-inactive"
                    }`}
                    onClick={() => setSelectedKey(nav.key)}
                  >
                    {nav.icon}
                  </span>
                  {(isExpanded || isHovered || isMobileOpen) && (
                    <span className="menu-item-text">{nav.name}</span>
                  )}
                </span>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default AppSidebar;
