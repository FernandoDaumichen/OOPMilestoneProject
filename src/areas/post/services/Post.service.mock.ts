import IPost from "../../../interfaces/post.interface";
import IPostService from "./IPostService";
import { database } from "../../../model/fakeDB";
// ⭐️ Feel free to change this class in any way you like. It is simply an example...
export class MockPostService implements IPostService {
  addPost(post: IPost, username: string): void {
    const user = database.users.find((user) => user.username === username);
    if (!user) {
      throw new Error("User not found");
    }
    user.posts.push(post);
  }
  getAllPosts(username: string): IPost[] {
    const findPostsUser = database.users.find((user) => user.username === username);
    if (!findPostsUser) {
      throw new Error("User not found");
    }
    const posts = findPostsUser.posts;
    return posts;
  }
  findById(id: string): IPost {
    const findPost = database.posts.find((post) => post.id === id);// I dont  know if this is right !!!!!!!!!!!!!!!
    if (!findPost) {
      throw new Error("Post not found");
    }
    return findPost;
  }
  addCommentToPost(message: { id: string; createdAt: string; userId: string; message: string }, postId: string): void {
    const findPost = database.posts.find((post) => post.postId === postId);
    if (!findPost) {
      throw new Error("Post not found");
    }
    findPost.comments.push(message);
  }

  sortPosts(posts: IPost[]): IPost[] {

    const sortedPosts = posts.sort((a, b) => {
      return b.createdAt.getTime() - a.createdAt.getTime();
    }
    );
    console.log(sortedPosts);
    return sortedPosts;
  }
}
