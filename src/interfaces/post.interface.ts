import IComment from "./comment.interface";

interface IPost {
  postId: number;
  userId: string;
  commentId: Array<number>;
  createdAt: Date;
  message: string;
  likes: number;
}

export default IPost;
