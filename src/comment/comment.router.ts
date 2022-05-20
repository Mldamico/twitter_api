import { CommentController } from "./controllers/comment.controller";
import { BaseRouter } from "../shared/routes/router";
import { CommentMiddleware } from "./middleware/comment.middleware";


export class CommentRouter extends BaseRouter<CommentController, CommentMiddleware>{
    constructor() {
        super(CommentController, CommentMiddleware);
    }


    routes(): void {
        this.router.get("/comments", (req, res) => this.controller.getComments(req, res));
        this.router.get("/comment/:id", (req, res) =>
            this.controller.getCommentById(req, res)
        );
        this.router.post("/createComment", (req, res, next) => [this.middleware.commentValidator(req, res, next)], (req, res) =>
            this.controller.createComment(req, res)
        );
        this.router.put("/updateComment/:id", (req, res) =>
            this.controller.updateComment(req, res)
        );
        this.router.delete("/deleteComment/:id", (req, res) =>
            this.controller.deleteComment(req, res)
        );
    }
}