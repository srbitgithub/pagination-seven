import { Pagination } from "./index"

describe("Pagination seven", () => {
  it("returns the current page in parentheses", () => {
    const expected = "1 (2) 3 4 5 6 7";
    const result = new Pagination(2,7);
    expect(result.result).toEqual(expected);
  })

  it("returns the current page in parentheses", () => {
    const expected = "1 2 3 4 (5) 6 7";
    const result = new Pagination(5,7);
    expect(result.result).toEqual(expected);
  })

  it("Page number dinamic", () => {
    const expected = "1 (2) 3 4 5";
    const result = new Pagination(2,5);
    expect(result.result).toEqual(expected);
  })

  it("Page number dinamic", () => {
    const expected = "1 (2) 3 4 5 6 7";
    const result = new Pagination(2,7);
    expect(result.result).toEqual(expected);
  })

  it("Never show more than 7 elements", () => {
    const expected = "1 ... 4 (5) 6 ... 9";
    const result = new Pagination(5,9);
    expect(result.result).toEqual(expected);
  })

  it("Never show more than 7 elements", () => {
    const expected = "1 ... 49 (50) 51 ... 100";
    const result = new Pagination(50,100);
    expect(result.result).toEqual(expected);
  })

  it("Extreme cases at the beginning of the string", () => {
    const expected = "1 2 3 (4) 5 ... 199";
    const result = new Pagination(4,199);
    expect(result.result).toEqual(expected);
  })

  it("Extreme cases at the beginning of the string", () => {
    const expected = "(1) 2 3 4 5 ... 199";
    const result = new Pagination(1,199);
    expect(result.result).toEqual(expected);
  })

  it("Extreme cases at the end of the string", () => {
    const expected = "1 ... 195 (196) 197 198 199";
    const result = new Pagination(196,199);
    expect(result.result).toEqual(expected);
  })

  it("Extreme cases at the end of the string", () => {
    const expected = "1 2 3 4 5 ... (199)";
    const result = new Pagination(199,199);
    expect(result.result).toEqual(expected);
  })
})
