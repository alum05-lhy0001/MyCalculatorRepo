// Calculator for two numbers
import React from "react";

function formatNumber(value) {
  if (typeof value === "number" && Number.isFinite(value)) return value;
  return "—";
}

function Calculator({ num1, num2 }) {
  const n1 = typeof num1 === "number" && !Number.isNaN(num1) ? num1 : NaN;
  const n2 = typeof num2 === "number" && !Number.isNaN(num2) ? num2 : NaN;

  const sum = Number.isNaN(n1) || Number.isNaN(n2) ? NaN : n1 + n2;
  const difference = Number.isNaN(n1) || Number.isNaN(n2) ? NaN : n1 - n2;
  const product = Number.isNaN(n1) || Number.isNaN(n2) ? NaN : n1 * n2;
  const quotient = Number.isNaN(n1) || Number.isNaN(n2) ? NaN : (n2 !== 0 ? n1 / n2 : Infinity);

  return (
    <div>
      <p>Sum: {formatNumber(sum)}</p>
      <p>Difference: {formatNumber(difference)}</p>
      <p>Product: {formatNumber(product)}</p>
      <p>Quotient: {String(quotient)}</p>
      {Number.isNaN(n1) || Number.isNaN(n2) ? (
        <p style={{ color: "#0000FF" }}>Enter two valid numbers to see results.</p>
      ) : null}
    </div>
  );
}

export default Calculator;
