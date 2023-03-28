import { Request, Response, NextFunction, Router } from "express";
import IController from "../../../interfaces/controller.interface";
import IPostService from "../services/IPostService";
import { database } from "../../../model/fakeDB";

class PostController implements IController {
  public path = "/posts";
  public router = Router();

  constructor(postService: IPostService) {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(this.path, this.getAllPosts);
    this.router.get(`${this.path}/:id`, this.getPostById);
    this.router.post(`${this.path}/:id/delete`, this.deletePost);
    this.router.post(`${this.path}/:id/comment`, this.createComment);
    this.router.post(`${this.path}`, this.createPost);
  }

  // 🚀 This method should use your postService and pull from your actual fakeDB, not the temporary posts object
  private getAllPosts = (_: Request, res: Response) => {
    res.render("post/views/posts", { posts: database.posts });
  };

  // 🚀 This method should use your postService and pull from your actual fakeDB, not the temporary post object
  private getPostById = async (request: Request, res: Response, next: NextFunction) => {
    const id = +request.params.id;
    res.render("post/views/post", { post: database.posts[id - 1] });
  };

  // 🚀 These post methods needs to be implemented by you
  private createComment = async (req: Request, res: Response, next: NextFunction) => {};
  private createPost = async (req: Request, res: Response, next: NextFunction) => {};
  private deletePost = async (req: Request, res: Response, next: NextFunction) => {
    const id = +req.params.id;
    const post = database.posts[id - 1];
    if (post) {
      database.posts.splice(id - 1, 1);
      res.redirect("/posts");
    } else {
      res.status(404).send("Post not found");
    }
  };
}

export default PostController;
