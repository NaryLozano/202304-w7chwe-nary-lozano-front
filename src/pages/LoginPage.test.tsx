import { render, screen } from "@testing-library/react";
import LoginFormPage from "../pages/LoginPage.js";

describe("Given a LoginPage page with a LoginForm component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a logotype with the alternative text 'The social network logotype'", () => {
      const expectedText = "The social network logotype";

      render(<LoginFormPage />);

      const text = screen.getByAltText(expectedText);

      expect(text).toBeInTheDocument();
    });
  });
});
