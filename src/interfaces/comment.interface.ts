interface IComment {
  commentId: Array<number>;
  userId: number;
  postId: number;
  createdAt: Date;
  message: string;
}

export default IComment;
