import { render, screen } from "@testing-library/react";
import { default as Contact } from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us Page test cases", () => {
  // beforeAll(() => {
  //   console.log("Before all");
  // });

  // afterAll(() => {
  //   console.log("after all");
  // });

  // beforeEach(() => {
  //   console.log("Before each");
  // });

  it("Should load contact us compoenent", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  it("Should load button inside contact component", () => {
    render(<Contact />);
    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });

  test("Should load input name inside contact component", () => {
    render(<Contact />);
    const inputName = screen.getByPlaceholderText("name");
    expect(inputName).toBeInTheDocument();
  });

  test("Should load 2 input boxes on the contact component", () => {
    render(<Contact />);
    //querying
    const inputBoxes = screen.getAllByRole("textbox");
    expect(inputBoxes.length).toBe(2);
  });
});
