import { it,expect } from "vitest";
import { reverseString } from "./reverseString";

it("should takes a string and returns it reversed", () => {

  const string = "hello world";
  
  const result = reverseString(string);

  expect(result).toBe("dlrow olleh");
});