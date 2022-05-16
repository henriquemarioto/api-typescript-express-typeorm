import userCreateService from "../../../services/users/userCreate.service";
import { DataSource } from "typeorm";
import { AppDataSource } from "../../../data-source";

describe("Create an user", () => {
  let connection: DataSource;

  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => (connection = res))
      .catch((err) => {
        console.error("Error during Data Source initialization", err);
      });
  });

  afterAll(async () => {
    await connection.destroy();
  });

  test("Should insert the information of new user in the database", async () => {
    const email = "email@mail.com";
    const name = "name";
    const password = "123456";

    const userData = { email, name, password };

    const newUser = await userCreateService(userData);

    expect(newUser.name).toBeDefined()
  });
});
