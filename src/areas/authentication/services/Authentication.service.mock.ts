import { database } from "../../../model/fakeDB";
import IUser from "../../../interfaces/user.interface";
import { IAuthenticationService } from "./IAuthentication.service";

export class MockAuthenticationService implements IAuthenticationService {
  readonly _db = database;

  public async getUserByEmailAndPassword(email: string, password: string): Promise<IUser> {
    try {
      let user = this._db.users.find((user) => user.email === email);
      if (user) {
        if (user.password === password) {
          return user;
        }
      }
    } catch (error) {
      return null;
    }
  }
  
  public async getUserById(id: number): Promise<false | IUser> {
    try {
      let user = this._db.users.find((user) => user.id === id);
      if (user) {
        return user;
      }
    } catch (error) {
      return null;
    }
  }

  public async findUserByEmail(email: String): Promise<null | IUser> {
    try {
      let user = this._db.users.find((user) => user.email === email);
      if (user) {
        return user;
      }
    } catch (error) {
      return null;
    }
  }

  public async createUser(user: any): Promise<IUser> {
    try {
      this._db.users.push(user);
      return user;
    } catch (error) {
      return null;
    }
  }
}
