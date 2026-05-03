import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

//we can group test cases in describe, we can have multiple describe or we can have describe inside a describe
describe("Contact us page test cases", () => {
    //we can use test & it both are same
  it("Should load contact component", () => {
    render(<Contact />);

    const header = screen.getByRole("heading");

    expect(header).toBeInTheDocument();
  });

  it("Should load button inside contact component", () => {
    render(<Contact />);

    const button = screen.getByText("Submit");

    expect(button).toBeInTheDocument();
  });

  it("Should load input name inside contact component", () => {
    render(<Contact />);

    const placeholder = screen.getByPlaceholderText("Second Input");

    expect(placeholder).toBeInTheDocument();
  });

  it("Should load input name inside contact component", () => {
    render(<Contact />);

    //Querying
    const inputBoxes = screen.getAllByRole("textbox");
    //returns jsx element, react element, react fiber node, that is an object

    //console.log(inputBoxes);
    expect(inputBoxes.length).toBe(2);
  });
});