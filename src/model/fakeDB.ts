import IDatabase from "../interfaces/database.interface.ts";
import IUser from "../interfaces/user.interface.ts";
import IPost from "../interfaces/post.interface.ts";
import IComment from "../interfaces/comment.interface.ts";

// Please feel free to not use this, or completely change it to your liking. It is just an example.
const database: IDatabase = {

 users : [
  {
    userId: 1,
    userName: "ADahnji",
    firstName: "Armaan",
    lastName: "Armaan",
    email: "ad123@gmail.com",
    password: "ad123123!",
    role: "admin",
    following: [],
  },
  {
    userId: 2,
    userName: "john123",
    firstName: "John",
    lastName: "Hancock",
    email: "jo123@gmail.com",
    password: "jo123",
    role: "user",
    following: [], 
  },
  {
    userId: 3,
    username: "billgates",
    firstName: "Bill",
    lastName: "Gates",
    email: "gates@gmail.com",
    password: "gates123",
    role: "user",
    following: [],
  },
  {
    userId: "4",
    username: "james123",
    firstName: "James",
    lastName: "Smith",
    email: "james123@gmail.com",
    password: "james123",
    role: "user",
    following: [],
  },
],

const IPost = [
  {
    postId: 1,
    userId: 2,
    commentId: [1],
    createdAt: new Date(),
    message: "Hi there",
    likes: "2",
  },
  {
    postId: 2,
    userId: 2,
    commentId: 2,
    createdAt: new Date(),
    message: "this is a new post by me",
    likes: "2",
  },
  {
    postId: 3,
    userId: 3,
    commentId: [],
    message: "Microsoft is a nice company",
    createdAt: new Date(),
    likes: 3,
  },
  {
    postId: 4,
    userId: 4,
    commentId: [3,4],
    message: "Nice weather today in Vancouver",
    createdAt: new Date(),
    likes: 30,
},
],

const comments = [
  {
    commentId: 1,
    userId: 2,
    postId: 1,
    createdAt: new Date(),
    message: "cool post",
  },
  {
    commentId: 2,
    userId: 2,
    postId: 2,
    createdAt: new Date(),
    message: "even cooler post",
  },
  {
    commentId: 3,
    userId: 3,
    postId: 4,
    createdAt: "2012-01-09T11:25:13Z",
    message: "this is some random comment",
  },
  {
    commentId: 4,
    userId: 3,
    postId: 4,
    createdAt: "2012-02-05T05:13:24Z",
    message: "The weather is always nice when you're rich like me.",
  },
],
}
export { database };
