"use client";

import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import { Listbox, ListboxSection, ListboxItem, cn } from "@nextui-org/react";
import { ListboxWrapper, UserApp } from "@/app/dashboard/components";
import {
  CopyDocumentIcon,
  EditDocumentIcon,
  AddNoteIcon,
  DeleteDocumentIcon,
} from "@/app/components/icons";
const iconClasses =
  "text-xl text-default-500 pointer-events-none flex-shrink-0";
const items = [
  {
    key: "new",
    name: "New file",
    icon: <AddNoteIcon className={iconClasses} />,
  },
  {
    key: "copy",
    name: "Copy link",
    icon: <CopyDocumentIcon className={iconClasses} />,
  },
  {
    key: "edit",
    name: "Edit file",
    icon: <EditDocumentIcon className={iconClasses} />,
  },
  {
    key: "delete",
    name: "Delete file",
    icon: <DeleteDocumentIcon className={iconClasses} />,
  },
];
export const SidebarApp = () => {
  return (
    <ListboxWrapper>
      <Listbox
        variant="faded"
        aria-label="Listbox menu with icons"
        topContent={<UserApp />}
        bottomContent={<UserApp />}
      >
        {items.map((item) => (
          <ListboxItem
            key={item.key}
            startContent={item.icon}
            color="default"
            className="p-2"
          >
            {item.name}
          </ListboxItem>
        ))}
      </Listbox>
    </ListboxWrapper>
  );
};
