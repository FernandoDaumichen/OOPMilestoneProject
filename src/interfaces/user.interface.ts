import IPost from "./post.interface";

export default interface IUser {
  userId: number;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  following?: Array<number>;
  posts?: Array<IPost>;
  role: string;
}
