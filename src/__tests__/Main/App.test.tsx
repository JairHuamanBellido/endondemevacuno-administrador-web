import { render, screen } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router";

import App from "../../App";

describe("Render App component", () => {
  it("should show Login Page", () => {
    const { container, getByText } = render(
      <MemoryRouter initialEntries={["/login"]}>
        <App />
      </MemoryRouter>
    );

    expect(container).toBeInTheDocument();
    expect(getByText(/Helios/i)).toBeInTheDocument();
  });
});
