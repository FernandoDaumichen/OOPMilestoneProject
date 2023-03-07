import IComment from "./comment.interface";

interface IPost {
  postId: number;
  userId: number;
  commentId: number;
  createdAt: Date;
  message: string;
  likes: number;
}

export default IPost;
