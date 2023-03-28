import IDatabase from "../interfaces/database.interface.ts";

// Please feel free to not use this, or completely change it to your liking. It is just an example.
const database: IDatabase = {
  users: [
    {
      id: "ArmaanDahnji",
      username: "ArmaanDahnji",
      firstName: "Armaan",
      lastName: "Dahnji",
      email: "ad123@gmail.com",
      password: "ad123123!",
      role: "admin",
      following: [1],
      followers: [2],
    },
    {
      id: "BillGates",
      username: "BillGates",
      firstName: "Bill",
      lastName: "Gates",
      email: "bg123@gmail.com",
      password: "bg123123!",
      following: [1],
      followers: [2],
      role: "user",
    },
    {
      id: "3",
      username: "SteveJobs",
      firstName: "Steve",
      lastName: "Jobs",
      email: "js123@gmail.com",
      password: "js123123!",
      following: [1],
      followers: [2],
      role: "user",
    },
  ],

  posts: [
    {
      postId: "1",
      userId: "SteveJobs",
      createdAt: "Thursday, March 2nd",
      message: "I'm seriously considering acquiring devHouse for 6 billion dollars...",
      comments: "0",
      reposts: "0",
      likes: "0",
      commentList: [],
    },
    {
      postId: "2",
      userId: "ArmaanDahnji",
      createdAt: new Date(),
      message: "lolllllll",
      comments: "4",
      reposts: "2",
      likes: "2",
      commentList: [],
    },
    {
      postId: "3",
      userId: "BillGates",
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
