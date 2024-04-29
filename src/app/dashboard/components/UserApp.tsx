import React from "react";
import { User } from "@nextui-org/react";

const user = {
  name: "Jane Doe",
  description: "Product Designer",
  image: "https://i.pravatar.cc/150?u=a04258114e29026702d",
};

export const UserApp = () => {
  const { name, description, image } = user;
  return (
    <User
      className="my-4"
      isFocusable
      name={name}
      description={description}
      avatarProps={{
        src: `${image}`,
        name: `${name}`,
        isBordered: true,
        color: "success",
      }}
    />
  );
};
