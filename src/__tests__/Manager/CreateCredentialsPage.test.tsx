import { render, screen } from "@testing-library/react";
import { HttpError as Error } from "core/types/HttpError";
import useCreateCredentials from "module/Dashboard/Application/hooks/useCreateCredentials";
import CreateCredentialsPage from "module/Dashboard/Application/pages/CreateCredentialsPage";
import { HttpRestApiCreateCredentialsRequest as Payload } from "module/Dashboard/Infrastructure/model/HttpRestApiCreateCredentialsRequest";
import {
  QueryClient,
  QueryClientProvider,
  UseMutationResult,
} from "react-query";
import { MemoryRouter } from "react-router-dom";

jest.mock("../../module/Dashboard/Application/hooks/useCreateCredentials");

const mockUseCreateCredentials = useCreateCredentials as jest.Mock<
  UseMutationResult<void, Error, Payload, unknown>
>;

describe("Render Generate Credentials page", () => {
  const queryClient = new QueryClient();

  beforeAll(() => {
    mockUseCreateCredentials.mockImplementation((res) => ({ ...res }));
    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter initialEntries={["/generate-credentials"]}>
          <CreateCredentialsPage />
        </MemoryRouter>
      </QueryClientProvider>
    );
  });

  it("contains a form", () => {
    expect(screen.getByTestId("form")).toBeInTheDocument();
  });
});
