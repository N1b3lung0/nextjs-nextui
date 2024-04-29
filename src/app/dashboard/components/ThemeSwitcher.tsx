"use client";

import React from "react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Switch } from "@nextui-org/react";
import { MoonIcon, SunIcon } from "@/app/components/icons";

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const onChange =
    theme === "light" ? () => setTheme("dark") : () => setTheme("light");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Switch
      size="lg"
      color="default"
      defaultSelected={theme === "dark"}
      onChange={onChange}
      startContent={<SunIcon />}
      endContent={<MoonIcon />}
      thumbIcon={({ isSelected, className }) =>
        isSelected ? (
          <MoonIcon className={className} />
        ) : (
          <SunIcon className={className} />
        )
      }
    />
  );
};
