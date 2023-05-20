import { render, screen } from "@testing-library/react";
import LoginForm from "./LoginForm.js";

describe("Given a LoginForm component ", () => {
  describe("When it is Rendered", () => {
    test("Then it should show an input element with the text username", () => {
      render(<LoginForm />);

      const inputText = screen.getByPlaceholderText("Username");

      expect(inputText).toBeInTheDocument();
    });
  });
});
