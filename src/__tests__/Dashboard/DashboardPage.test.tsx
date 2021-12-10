import { render, screen } from "@testing-library/react";
import DashboardPage from "module/Dashboard/Application/DashboardPage";
import React from "react";
import { MemoryRouter } from "react-router";

describe("Render Dashboard Page", () => {
  beforeEach(() => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <DashboardPage />
      </MemoryRouter>
    );
  });

  it("contain a sidebar", () => {
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  });
});
