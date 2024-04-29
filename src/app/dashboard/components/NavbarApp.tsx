"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { AcmeLogo } from "@/app/components/icons";
import { ThemeSwitcher, UserApp } from "@/app/dashboard/components";
import { usePathname } from "next/navigation";
import { links } from "@/app/lib/data";

export const NavbarApp = () => {
  const pathname = usePathname();
  return (
    <Navbar
      isBordered
      className="shadow-lg hover:shadow-xl dark:shadow-zinc-800 dark:shadow-md"
    >
      <NavbarBrand>
        <AcmeLogo />
        <p className="font-bold text-inherit">ACME</p>
      </NavbarBrand>
      <NavbarContent className="gap-4" justify="center">
        {links.map((link, idx) => (
          <NavbarItem key={idx} isActive={pathname === link.pathname}>
            <Link color="foreground" href="#" aria-current="page">
              {link.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
        <NavbarItem>
          <UserApp />
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="default" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};
