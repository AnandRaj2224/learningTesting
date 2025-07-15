import { it,expect } from "vitest";
import { calculator } from "./calculator";

it("should take two numbers and return the correct calculation", () => {

  const num1 = 5;
  const num2 = 10;

  expect(calculator.add(num1,num2)).toBe(num1+num2);
  expect(calculator.subtract(num1,num2)).toBe(num1-num2);
  expect(calculator.multiply(num1,num2)).toBe(num1*num2);
  expect(calculator.divide(num1,num2)).toBe(num1/num2);
});