import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";

jest.mock("./components/login/Login", () => ({ __esModule: true, default: () => <div>Login content</div> }));
jest.mock("./components/map/Map", () => ({ __esModule: true, default: () => <div>Map content</div> }))
jest.mock("./components/profile/Profile", () => ({ __esModule: true, default: () => <div>Profile content</div> }));

describe("App", () => {
  it("renders correctly", () => {
    const { container } = render(<App />);
    expect(container.innerHTML).toMatch("Login content");
  });

  describe("when clicked on navigation buttons", () => {
    it("opens the corresponding page", () => {
      const { getByText, container } = render(<App />);
      fireEvent.click(getByText('Map'));
      expect(container.innerHTML).toMatch("Map content");
      fireEvent.click(getByText('Profile'));
      expect(container.innerHTML).toMatch("Profile content");
    });
  });
});
