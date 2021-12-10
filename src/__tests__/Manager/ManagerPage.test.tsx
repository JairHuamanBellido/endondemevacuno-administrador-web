import { render, screen } from "@testing-library/react";
import useGetManagers from "module/Dashboard/Application/hooks/useGetManagers";
import ManagerPage from "module/Dashboard/Application/pages/ManangersPage";
import { Manager } from "module/Dashboard/Domain/entity/Manager";
import { QueryClient, QueryClientProvider, UseQueryResult } from "react-query";
import { MemoryRouter } from "react-router-dom";

jest.mock("../../module/Dashboard/Application/hooks/useGetManagers");

const mockUseGetManagers = useGetManagers as jest.Mock<
  UseQueryResult<Manager[], unknown>
>;

const manager: Manager[] = [
  {
    createdAt: new Date().toDateString(),
    id: 1,
    isEnabled: true,
    lastname: "Huaman",
    name: "Jair",
    email: "hau@gmail.com",
  },
  {
    createdAt: new Date().toDateString(),
    id: 2,
    isEnabled: false,
    lastname: "Huaman",
    name: "Jair",
    email: "hau@gmail.com",
  },
  {
    createdAt: new Date().toDateString(),
    id: 3,
    isEnabled: true,
    lastname: "Huaman",
    name: "Jair",
    email: "hau@gmail.com",
  },
  {
    createdAt: new Date().toDateString(),
    id: 4,
    isEnabled: true,
    lastname: "Huaman",
    name: "Jair",
    email: "hau@gmail.com",
  },
];

describe("Render Manager page", () => {
  const queryClient = new QueryClient();
  let container: HTMLElement;
  beforeEach(() => {
    mockUseGetManagers.mockImplementation((res) => ({
      data: manager,
      isSuccess: true,
      isLoading: false,
      ...res,
    }));

    container = render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter initialEntries={["/"]}>
          <ManagerPage />
        </MemoryRouter>
      </QueryClientProvider>
    ).container;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should display refresh button", () => {
    expect(screen.getByTestId("refresh")).toBeInTheDocument();
  });
  
  it("should display 4 users", () => {
    expect(container.querySelectorAll(".manager-row")).toHaveLength(4);
  });

  it("should show 1 user inactive", () => {
    expect(screen.queryAllByText(/Desactivado/i)).toHaveLength(1);
  });

  it("should show 3 user active", () => {
    expect(screen.queryAllByText(/Activo/i)).toHaveLength(3);
  });
});
