import React from "react";
import { render, RenderResult, screen } from "@testing-library/react";
import { HttpError } from "core/types/HttpError";
import useAuthentication from "module/Login/Application/hooks/useAuthentication";
import { AuthenticationRequest } from "module/Login/Domain/entity/AuthenticationRequest.interface";
import { HttpRestApiAuthenticationResponse } from "module/Login/Infrastructure/model/HttpApiRestAuthenticationResponse.model";
import {
  QueryClient,
  QueryClientProvider,
  UseMutationResult,
} from "react-query";
import LoginForm from "../../module/Login/Application/components/Form/LoginForm";
import { error } from "console";

jest.mock("../../module/Login/Application/hooks/useAuthentication");

const mockUseAuthentication = useAuthentication as jest.Mock<
  UseMutationResult<
    HttpRestApiAuthenticationResponse,
    HttpError,
    AuthenticationRequest,
    unknown
  >
>;

describe("Render Form Login component", () => {
  let component: RenderResult;
  const queryClient = new QueryClient();
  beforeEach(() => {
    mockUseAuthentication.mockImplementation((res) => ({
      ...res,
      isSuccess: false,
      isLoading: false,
      isError: false,
    }));
    component = render(
      <QueryClientProvider client={queryClient}>
        <LoginForm />
      </QueryClientProvider>
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should have form", () => {
    expect(screen.getByTestId("form")).toBeInTheDocument();
  });

  it("should have 2 inputs", () => {
    const { container } = component;
    expect(container.querySelectorAll("input[type=text]")).toHaveLength(1);
    expect(container.querySelectorAll("input[type=password]")).toHaveLength(1);
  });

  it("should have submit button", () => {
    const { container } = component;
    expect(container.querySelectorAll("input[type=submit]")).toHaveLength(1);
  });

  it("should show spinner until api response", () => {
    mockUseAuthentication.mockImplementation((args) => ({
      ...args,
      isLoading: true,
    }));

    render(
      <QueryClientProvider client={queryClient}>
        <LoginForm />
      </QueryClientProvider>
    );
    expect(screen.getByTestId("loading")).toBeInTheDocument();
  });

  it("should show error", () => {
    mockUseAuthentication.mockImplementation((args) => ({
      ...args,
      isError: true,
      error: {
        ...error,
        response: { data: { message: "Invalid credentials" } },
      },
    }));
    render(
      <QueryClientProvider client={queryClient}>
        <LoginForm />
      </QueryClientProvider>
    );
    expect(screen.getByTestId("error")).toBeInTheDocument();
  });
});
