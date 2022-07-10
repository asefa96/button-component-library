import React from "react";
import { FC } from "react";
import Button from "./Button.styled";
import { ButtonType } from "./Button.types";

const MyButton: FC<ButtonType> = ({
  text = "Test Button",
  variant = "primary",
  size = "medium",
  stickyPosition,
  className,
  onClick,
  disabled
}) => {
  return (
    <>
      <Button
        onClick={onClick}
        className={className}
        stickyPosition={stickyPosition}
        variant={variant}
        size={size}
        disabled={disabled}
      >
        {text}
      </Button>
    </>
  );
};

export default MyButton;
