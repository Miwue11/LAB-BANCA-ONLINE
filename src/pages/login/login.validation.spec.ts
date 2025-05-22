import { validateForm } from "./login.validation";
import { Credentials } from "./login.vm";

describe("Login Validation", () => {
  it("should validate email format", () => {
    //Arrange
    const credentials: Credentials = {
      user: "myuser",
      password: "mypassword",
    };
    //Act
    const result = validateForm(credentials);
    //Assert
    expect(result.succeeded).toBeTruthy();
  });
  it("should return error if user is empty", () => {
    //Arrange
    const credentials: Credentials = {
      user: "",
      password: "mypassword",
    };
    //Act
    const result = validateForm(credentials);
    //Assert
    expect(result.errors.user).toBe("User is required");
    expect(result.succeeded).toBeFalsy();
  });
  it("should return error if password is empty", () => {
    //Arrange
    const credentials: Credentials = {
      user: "myuser",
      password: "",
    };
    //Act
    const result = validateForm(credentials);
    //Assert
    expect(result.errors.password).toBe("Password is required");
    expect(result.succeeded).toBeFalsy();
  });
  it("should return error if both user and password are empty", () => {
    //Arrange
    const credentials: Credentials = {
      user: "",
      password: "",
    };
    //Act
    const result = validateForm(credentials);
    //Assert
    expect(result.errors.user).toBe("User is required");
    expect(result.errors.password).toBe("Password is required");
    expect(result.succeeded).toBeFalsy();
  });
});
