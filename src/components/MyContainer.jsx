import React from "react";

export default function MyContainer({className, children }) {
  return <div className={`container mx-auto ${className}`}>{children}</div>;
}
