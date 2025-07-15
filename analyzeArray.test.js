import { it,expect } from "vitest";
import { analyzeArray } from "./analyzeArray";

it("should take an array of numbers and returns an object with the following properties: average, min, max, and length",() => {
  const arr = [1,2,3,4,5];

  const result = analyzeArray(arr);

  expect(result).toBeTypeOf('object');

});