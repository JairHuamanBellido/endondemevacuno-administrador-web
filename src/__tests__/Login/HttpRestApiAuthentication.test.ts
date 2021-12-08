import { HttpRestApiAuthentication } from "../../module/Login/Infrastructure/HttpRestApiAuthentication";

// jest.mock("./HttpRestApiAuthentication");

describe("Authentication api rest", () => {
  const expectResponse = {
    token: "token",
    id: 1,
  };

  it("should return the token", async () => {
    jest
      .spyOn(HttpRestApiAuthentication, "login")
      .mockReturnValue(Promise.resolve(expectResponse));

    const testResult = await HttpRestApiAuthentication.login({
      username: "jair",
      password: "123",
    });

    expect(testResult).toBe(expectResponse);
  });
});
