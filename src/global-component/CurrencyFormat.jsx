import React from "react";

const CurrencyFormat = ({ value, currency = "USD", locale = "en-US" }) => {
  let numericValue = 0;

  // If value is a string like "$89.99", clean it first
  if (typeof value === "string") {
    const cleaned = value.replace(/[^0-9.]/g, ""); // Remove $ or any symbols
    numericValue = parseFloat(cleaned) || 0;
  } else {
    numericValue = parseFloat(value) || 0;
  }

  const formatted = numericValue.toLocaleString(locale, {
    style: "currency",
    currency,
  });

  return <>{formatted}</>;
};

export const parsePrice = (value) => {
  if (typeof value === "number") return value;
  if (typeof value === "string") return parseFloat(value.replace(/[^0-9.-]+/g, ""));
  return 0;
};
export default CurrencyFormat;
