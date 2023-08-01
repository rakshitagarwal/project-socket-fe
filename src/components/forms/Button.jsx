import Image from "next/image";
import { forwardRef } from "react";

export const Button = forwardRef(
  (
    {
      className,
      variant,
      size,
      rounded,
      state,
      icon = "",
      text = "",
      ...props
    },
    ref
  ) => {
    return (
      <button
        {...props}
        className={`  btn ${
          state === "active" ? "bg-success" : ""
        } ${className} ${rounded ? "rounded-full" : ""} `}
      >
        {icon && (
          <Image
            src={icon}
            className="max-mobile:hidden"
            alt="mobile"
            width={15}
            height={15}
          />
        )}
        {text}
      </button>
    );
  }
);
