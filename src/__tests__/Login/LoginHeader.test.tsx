import React from "react";
import { render, screen } from "@testing-library/react";
import LoginHeader from "../../module/Login/Application/components/Header/LoginHeader";

describe("Render Header Login component", () => {
  beforeEach(() => {
    render(<LoginHeader />);
  });
  it("should show logo", () => {
    const logoElement = screen.getByTestId("logo-login");
    expect(logoElement).toBeInTheDocument();
  });

  it("should show title", () => {
    const title = screen.getByText(/Helios/i);
    expect(title).toBeInTheDocument();
  });
});
