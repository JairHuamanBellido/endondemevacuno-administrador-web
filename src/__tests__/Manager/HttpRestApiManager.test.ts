import { HttpDefaultResponse } from "core/types/HttpDefaultResponse";
import { HttpRestApiManager } from "module/Dashboard/Infrastructure/HttpRestApiManager";
import { HttpRestApiManagerResponse } from "module/Dashboard/Infrastructure/model/HttpRestApiManagerResponse.model";

describe("Manager API Rest", () => {
  const expectResponse: HttpRestApiManagerResponse[] = [
    {
      createdAt: new Date(),
      email: "email",
      id: 1,
      isEnabled: true,
      lastname: "huaman",
      name: "jair",
    },
  ];

  it("should return 1 manager", async () => {
    jest
      .spyOn(HttpRestApiManager, "getManagers")
      .mockReturnValue(Promise.resolve(expectResponse));

    const testResult = await HttpRestApiManager.getManagers();

    expect(testResult).toHaveLength(expectResponse.length);
    expect(testResult.some((e) => e.name === "jair")).toBeTruthy();
  });

  it("should return a successfully message", async () => {
    const httpResponse: HttpDefaultResponse = {
      message: "ok",
    };
    jest
      .spyOn(HttpRestApiManager, "updateAccountStatus")
      .mockReturnValue(Promise.resolve(httpResponse));

    const testResult = await HttpRestApiManager.updateAccountStatus({
      id: 1,
      accountStatus: true,
    });
    expect(testResult.message).toEqual(httpResponse.message);
  });
});
