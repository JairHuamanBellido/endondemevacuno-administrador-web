import { AuthenticationService } from "module/Login/Domain/service/AuthenticationService";

describe("Authentication Service", () => {
  const expectResponse = {
    token: "token",
    id: 1,
  };

  it("should return authentication response", async () => {
    jest
      .spyOn(AuthenticationService, "execute")
      .mockReturnValue(Promise.resolve(expectResponse));

    const testResult = await AuthenticationService.execute({
      username: "jair",
      password: "123",
    });

    expect(testResult).toBe(expectResponse);
  });
});
