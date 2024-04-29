"use client";

import { Listbox, ListboxSection, ListboxItem } from "@nextui-org/react";
import { ListboxWrapper, UserApp } from "@/app/dashboard/components";
import { items } from "@/app/lib/data";
export const SidebarApp = () => {
  return (
    <ListboxWrapper>
      <Listbox
        variant="shadow"
        aria-label="Listbox menu with icons"
        topContent={<UserApp />}
        bottomContent={<UserApp />}
      >
        <ListboxSection title="Actions" showDivider>
          {items.map((item) => (
            <ListboxItem
              key={item.key}
              href={item.pathname}
              description="Create a new file"
              startContent={item.icon}
              color="default"
              className="p-2"
            >
              {item.label}
            </ListboxItem>
          ))}
        </ListboxSection>
      </Listbox>
    </ListboxWrapper>
  );
};
