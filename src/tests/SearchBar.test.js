import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "@/components/SearchBar";

describe("SearchBar", () => {
  it("calls onSearch when user types", () => {
    const onSearch = jest.fn();

    render(<SearchBar query="" onSearch={onSearch} />);

    const input = screen.getByPlaceholderText("Search products...");
    fireEvent.change(input, { target: { value: "shoes" } });

    expect(onSearch).toHaveBeenCalledWith("shoes");
  });
});
