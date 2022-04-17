import { pagination } from "./index"

describe("Pagination seven", () => {
  it("returns 'That code works fine'", () => {
    console.clear()
    const expected = "That code works fine";
    const result = pagination();
    expect(result).toEqual(expected);
  })
})
