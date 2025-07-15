import { it,expect } from "vitest";
import { capitalize } from "./capitalize";

it("should take a string and returns it with the first character capitalized", () => {
  // arrange
  const string = "hello";
  // act
  const result = capitalize(string);
  //assert
  const firstChar = result.charCodeAt(0);
  expect(firstChar).toBeGreaterThanOrEqual(65);
  expect(firstChar).toBeLessThanOrEqual(90);

  expect(result.slice(1)).toBe(string.slice(1));
});