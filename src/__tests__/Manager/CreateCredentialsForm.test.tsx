import { render } from "@testing-library/react";
import { HttpError as Error } from "core/types/HttpError";
import CreateCredentialsForm from "module/Dashboard/Application/components/Form/CreateCredentialsForm";
import useCreateCredentials from "module/Dashboard/Application/hooks/useCreateCredentials";
import { HttpRestApiCreateCredentialsRequest as Payload } from "module/Dashboard/Infrastructure/model/HttpRestApiCreateCredentialsRequest";
import {
  QueryClient,
  QueryClientProvider,
  UseMutationResult,
} from "react-query";

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
    expect(container.querySelector("input[name=name]")).toHaveValue("");
    expect(container.querySelector("input[name=lastname]")).toHaveValue("");
    expect(container.querySelector("input[name=email]")).toHaveValue("");
    expect(container.querySelector("input[name=documentId]")).toHaveValue("");
  });
});
