import IUser from "./user.interface";

// ⭐️ Feel free to change this interface to your liking
export default interface IDatabase {
  posts: any;
  users: IUser[];
}
