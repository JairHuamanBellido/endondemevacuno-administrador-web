import React from "react";
import { render, screen } from "@testing-library/react";
import Sidebar from "module/Dashboard/Application/components/Sidebar/Sidebar";
import { MemoryRouter } from "react-router";

describe("Render Sidebar component", () => {
  beforeEach(() => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Sidebar />
      </MemoryRouter>
    );
  });

  it("should show logo", () => {
    expect(screen.getByTestId("logo")).toBeInTheDocument();
  });

  it("should Inicio option", () => {
    expect(screen.getByText(/Inicio/i)).toBeInTheDocument();
  });

  it("should contain one tag <a>", () => {
    const { container } = render(
      <MemoryRouter initialEntries={["/"]}>
        <Sidebar />
      </MemoryRouter>
    );
    expect(container.querySelectorAll("a")).toHaveLength(1);
  });
});
