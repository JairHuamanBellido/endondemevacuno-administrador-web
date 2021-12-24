import { render, screen } from "@testing-library/react";
import { HttpError as Error } from "core/types/HttpError";
import CreateCredentialsForm from "module/Dashboard/Application/components/Form/CreateCredentialsForm";
import useCreateCredentials from "module/Dashboard/Application/hooks/useCreateCredentials";
import { HttpRestApiCreateCredentialsRequest as Payload } from "module/Dashboard/Infrastructure/model/HttpRestApiCreateCredentialsRequest";
import {
  QueryClient,
  QueryClientProvider,
  UseMutationResult,
} from "react-query";
import { Route, Routes } from "react-router-dom";

jest.mock("../../module/Dashboard/Application/hooks/useCreateCredentials");

const mockUseCreateCredentials = useCreateCredentials as jest.Mock<
  UseMutationResult<void, Error, Payload, unknown>
>;

describe("Render Generate Credentials form", () => {
  const queryClient = new QueryClient();
  let container: HTMLElement;
  beforeEach(() => {
    mockUseCreateCredentials.mockImplementation((res) => ({
      ...res,
      isLoading: false,
    }));
    container = render(
      <QueryClientProvider client={queryClient}>
        <CreateCredentialsForm />
      </QueryClientProvider>
    ).container;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("contains 3 inputs text and 1 input email", () => {
    expect(container.querySelectorAll("input[type=text]")).toHaveLength(3);
    expect(container.querySelectorAll("input[type=email]")).toHaveLength(1);
  });

  it("contains 1 submit button", () => {
    expect(container.querySelectorAll("input[type=submit]")).toHaveLength(1);
  });

  it("must be contains empty value on each input", () => {
    expect(screen.getByTestId("dni")).toHaveValue("");
    expect(screen.getByTestId("lastname")).toHaveValue("");
    expect(screen.getByTestId("email")).toHaveValue("");
    expect(screen.getByTestId("email")).toHaveValue("");
  });

  it("should show a error message", () => {
    mockUseCreateCredentials.mockImplementation((res) => ({
      ...res,
      isError: true,
      error: { response: { data: { message: "Dni ya existe" } } },
    }));
    render(
      <QueryClientProvider client={queryClient}>
        <CreateCredentialsForm />
      </QueryClientProvider>
    );
    expect(screen.getByTestId("error")).toBeInTheDocument();
    expect(screen.queryByTestId("spinner")).not.toBeInTheDocument();
  });

  it("should show a spinner", () => {
    mockUseCreateCredentials.mockImplementation((res) => ({
      ...res,
      isLoading: true,
    }));
    render(
      <QueryClientProvider client={queryClient}>
        <CreateCredentialsForm />
      </QueryClientProvider>
    );
    expect(screen.getByTestId("spinner")).toBeInTheDocument();
    expect(screen.queryByTestId("error")).not.toBeInTheDocument();
  });
});
