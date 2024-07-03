import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
} from "@nextui-org/react";
import { BsGithub } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import LogoIcon from "../Logo/LogoIcon";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  const menuItems = [
    { name: "Inicio", path: "/" },
    { name: "Creación QR", path: "/create" },
  ];

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  const handleAuthClick = () => {
    setIsAuthenticated((prev) => !prev);
    setIsMenuOpen(false);
  };

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      isMenuOpen={isMenuOpen}
      className="text-white"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <NavLink
            to="/"
            className="flex items-center"
            onClick={handleMenuItemClick}
          >
            <LogoIcon />
            <p className="font-bold">QR App</p>
          </NavLink>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-white font-bold" : "text-white"
            }
            onClick={handleMenuItemClick}
          >
            Inicio
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink
            to="/create"
            className={({ isActive }) =>
              isActive ? "text-white font-bold" : "text-white"
            }
            onClick={handleMenuItemClick}
          >
            Creación QR
          </NavLink>
        </NavbarItem>

        <NavbarItem>
          <NavLink
            to="/create"
            className={({ isActive }) =>
              isActive ? "text-white font-bold" : "text-white"
            }
            onClick={handleMenuItemClick}
          >
            Creación QR
          </NavLink>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem
          key="primary"
          color="primary"
          content="primary"
          className="capitalize"
        >
          <Button
            as={NavLink}
            to={isAuthenticated ? "/" : "/"}
            className={({ isActive }) =>
              isActive
                ? "text-white font-bold flex items-center"
                : "text-white flex items-center hover:scale-110 hover:opacity-80 transition"
            }
            variant="flat"
            color="primary"
            onClick={() => {
              handleAuthClick();
            }}
          >
            <BsGithub className="mr-1" />
            {isAuthenticated ? "Sign Out" : "Sign Up"}
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={index}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive ? "text-white font-bold w-full" : "text-white w-full"
              }
              onClick={handleMenuItemClick}
            >
              {item.name}
            </NavLink>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

export default NavBar;
