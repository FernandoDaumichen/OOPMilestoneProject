import { database } from "../../../model/fakeDB";
import IPost from "../../../interfaces/post.interface";
import IPostService from "./IPostService";

// ❗️ Implement this class much later, once everything works fine with your mock db
export class PostService implements IPostService {
  addPost(post: IPost, username: string): void {
    const user = database.users.find((user) => user.username === username);
    if (!user) {
      throw new Error("User not found");
    }
    user.posts.push(post);
    

    
    //throw new Error("Method not implemented.");
  }
  getAllPosts(username: string): IPost[] {
    // 🚀 Implement this yourself.
    throw new Error("Method not implemented.");
  }
  findById(id: string): IPost {
    // 🚀 Implement this yourself.
    throw new Error("Method not implemented.");
  }
  addCommentToPost(message: { id: string; createdAt: string; userId: string; message: string }, postId: string): void {

    //throw new Error("Method not implemented.");
  }

  sortPosts(posts: IPost[]): IPost[] {
    
    const sortedPosts = posts.sort((a, b) => {
      return b.createdAt.getTime() - a.createdAt.getTime();
    }
    );
    console.log(sortedPosts);
     return sortedPosts;
     
    //throw new Error("Method not implemented.");

  }
}
