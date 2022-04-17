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

})
