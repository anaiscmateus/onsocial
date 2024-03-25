// Navigation.jsx
import React from "react";
import { useLocation } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";
import MessageIcon from "../assets/icons/MessageIcon";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();
  const isContactPage = location.pathname === "/contact";

  const menuItems = ["About", "Services", "Testimonials", "Portfolio"];

  return (
    <Navbar
      id="navigation"
      isBordered
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="xl"
    >
      <NavbarContent>
        {!isContactPage && (
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
        )}
        <NavbarBrand as={Link} href="/" color="foreground">
          <p className="font-bold text-inherit text-3xl melodrama">OnSocial</p>
        </NavbarBrand>
      </NavbarContent>

      {!isContactPage && (
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          {menuItems.map((item, index) => (
            <NavbarItem key={index}>
              <Link color="foreground" className="text-xl" href={`#${item.toLowerCase()}`}>
                {item}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>
      )}

      <NavbarContent justify="end">
        <NavbarItem>
          {isContactPage ? (
            <Button
              as={Link}
              href="/"
              variant="flat"
              radius="none"
              className="font-semibold text-xl"
            >
              Return to Home
            </Button>
          ) : (
            <Button
              as={Link}
              href="/contact"
              variant="flat"
              radius="none"
              className="font-semibold text-xl"
              endContent={<MessageIcon />}
            >
              Contact Us
            </Button>
          )}
        </NavbarItem>
      </NavbarContent>

      {!isContactPage && (
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color="foreground"
                className="w-full"
                href={`#${item.toLowerCase()}`}
                size="lg"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      )}
    </Navbar>
  );
}
