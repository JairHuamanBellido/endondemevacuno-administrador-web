import { render, screen } from "@testing-library/react";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import LoginForm from "../../module/Login/Application/components/Form/LoginForm";

describe("Render Form Login component", () => {
  it("shoudl have form", () => {
    const queryClient = new QueryClient({
      defaultOptions: {
        queries: { refetchOnWindowFocus: false },
      },
    });
    render(
      <QueryClientProvider client={queryClient}>
        <LoginForm />
      </QueryClientProvider>
    );
    expect(screen.getByTestId("form")).toBeInTheDocument();
  });

  it("should have 2 inputs", () => {
    const queryClient = new QueryClient({
      defaultOptions: {
        queries: { refetchOnWindowFocus: false },
      },
    });

    const { container } = render(
      <QueryClientProvider client={queryClient}>
        <LoginForm />
      </QueryClientProvider>
    );

    expect(container.querySelectorAll("input[type=text]")).toHaveLength(1);
    expect(container.querySelectorAll("input[type=password]")).toHaveLength(1);
  });

  it("should have submit button", () => {
    const queryClient = new QueryClient({
      defaultOptions: {
        queries: { refetchOnWindowFocus: false },
      },
    });

    const { container } = render(
      <QueryClientProvider client={queryClient}>
        <LoginForm />
      </QueryClientProvider>
    );

    expect(container.querySelectorAll("input[type=submit]")).toHaveLength(1);
  });
});
