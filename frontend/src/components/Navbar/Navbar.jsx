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

  React.useEffect(() => {
    const user = localStorage.getItem("user");
    setIsAuthenticated(!!user);
  }, []);

  const handleAuthClick = () => {
    const popup = window.open(
      "http://localhost:3000/auth/github",
      "targetWindow",
      `toolbar=no,
      location=no,
      status=no,
      menubar=no,
      scrollbars=yes,
      resizable=yes,
      width=620,
      height=700`
    );

    const handleAuthMessage = (event) => {
      if (event.origin === "http://localhost:3000" && event.data?.user) {
        localStorage.setItem("user", JSON.stringify(event.data.user));
        console.log(event.data.user);
        setIsAuthenticated(true);
        popup?.close();
        window.removeEventListener("message", handleAuthMessage);
      }
    };

    window.addEventListener("message", handleAuthMessage);
    setIsMenuOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsAuthenticated(false);
    window.location.href = "/";
  };

  const menuItems = [
    { name: "Inicio", path: "/" },
    ...(isAuthenticated ? [{ name: "Creación QR", path: "/create" }] : []),
  ];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      isMenuOpen={isMenuOpen}
      className="py-1 text-white"
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
            onClick={() => setIsMenuOpen(false)}
          >
            <LogoIcon />
            <p className="font-bold">QR App</p>
          </NavLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden gap-4 sm:flex" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={index}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive ? "text-white font-bold" : "text-white"
              }
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </NavLink>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem
          key="primary"
          color="primary"
          content="primary"
          className="capitalize"
        >
          <Button
            className="flex items-center text-white transition hover:scale-110 hover:opacity-80"
            variant="flat"
            color="primary"
            onClick={isAuthenticated ? handleLogout : handleAuthClick}
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
              onClick={() => setIsMenuOpen(false)}
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
