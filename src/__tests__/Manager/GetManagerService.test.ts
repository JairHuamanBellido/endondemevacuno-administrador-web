import { Manager } from "module/Dashboard/Domain/entity/Manager";
import { GetManagerService } from "module/Dashboard/Domain/service/GetManagerService";

describe("Get Managers Service", () => {
  const expectResponse: Manager[] = [
    {
      createdAt: new Date().toString(),
      account: {
        id: "2",
        email: "em@email.com",
        isAdmin: false,
      },
      id: "1",
      isEnabled: true,
      lastname: "huaman",
      name: "jair",
    },
  ];

  it("should return managers for UI View", async () => {
    jest
      .spyOn(GetManagerService, "execute")
      .mockReturnValue(Promise.resolve(expectResponse));

    const testResult = await GetManagerService.execute();

    expect(testResult).toBe(expectResponse);
  });
});
