import IDatabase from "../interfaces/database.interface.ts";

// Please feel free to not use this, or completely change it to your liking. It is just an example.
const database: IDatabase = {
  users: [
    {
      id: 1,
      username: "Amaan123",
      firstName: "Armaan",
      lastName: "Armaan",
      email: "ad123@gmail.com",
      password: "ad123123!",
      role: "admin",
      following: [1],
      followers: [2],
    },
    {
      id: 2,
      username: "John123",
      firstName: "John",
      lastName: "Armaan",
      email: "jo123@gmail.com",
      password: "jo123",
      following: [1],
      followers: [2],
      role: "user",
    },
  ],

  posts: [
    {
      postId: "1",
      userId: "billgates",
      createdAt: "Thursday, March 2nd",
      message: "I'm seriously considering acquiring devHouse for 6 billion dollars...",
      comments: "0",
      reposts: "0",
      likes: "0",
      commentList: [],
    },
    {
      postId: 2,
      userId: "john",
      createdAt: new Date(),
      message: "lolllllll",
      comments: "4",
      reposts: "2",
      likes: "2",
      commentList: [],
    },
    {
      postId: 3,
      userId: "john",
      createdAt: new Date(),
      message: "this is a new post by me",
      comments: "4",
      reposts: "2",
      likes: "2",
      commentList: [],
    },
  ],
};

export { database };
