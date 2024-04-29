// SIDEBAR

import {
  CopyDocumentIcon,
  EditDocumentIcon,
  AddNoteIcon,
  DeleteDocumentIcon,
} from "@/app/components/icons";

export const iconClasses =
  "text-xl text-default-500 pointer-events-none flex-shrink-0";
export const items = [
  {
    key: "new",
    pathname: "/",
    description: "Create a new file",
    label: "New file",
    icon: <AddNoteIcon className={iconClasses} />,
  },
  {
    key: "copy",
    pathname: "/",
    description: "Copy the file link",
    label: "Copy link",
    icon: <CopyDocumentIcon className={iconClasses} />,
  },
  {
    key: "edit",
    pathname: "/",
    description: "Allows you to edit the file",
    label: "Edit file",
    icon: <EditDocumentIcon className={iconClasses} />,
  },
  {
    key: "delete",
    pathname: "/",
    description: "Permanently delete the file",
    label: "Delete file",
    icon: <DeleteDocumentIcon className={iconClasses} />,
  },
];

// NAVBAR

export const links = [
  { name: "Dashboard", pathname: "/dashboard" },
  { name: "Customers", pathname: "/customers" },
  { name: "Integrations", pathname: "/integrations" },
];
