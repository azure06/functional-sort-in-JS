import sortUtil from "./main";
import { expect } from "chai";
import "mocha";

describe("quicksort algorithm", () => {
  it("should return a sorted array list", () => {
    const result = sortUtil.quicksort([2, 4, 5, 6, 8, 0, -10, 1, 32, 43]);
    expect(result).to.deep.equal([-10, 0, 1, 2, 4, 5, 6, 8, 32, 43]);
  });
});

describe("merge sort algorithm", () => {
  it("should return a sorted array list", () => {
    const result = sortUtil.mergesort([2, 4, 5, 6, 8, 0, -10, 1, 32, 43]);
    expect(result).to.deep.equal([-10, 0, 1, 2, 4, 5, 6, 8, 32, 43]);
  });
});
