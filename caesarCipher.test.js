import { it, expect } from "vitest";
import { caesarCipher } from "./caesarCipher";

it("should take a string and a shift factor and returns it with each character shifted ", () => {

  const string = "hello";
  const shiftFactor = 3;

  const result = caesarCipher(string,shiftFactor);
  expect(result).toBe("khoor");
});