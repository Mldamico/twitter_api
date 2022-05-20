import { TweetController } from "./controllers/tweet.controller";
import { BaseRouter } from "../shared/routes/router";
import { TweetMiddleware } from "./middleware/tweet.middleware";


export class TweetRouter extends BaseRouter<TweetController, TweetMiddleware>{
    constructor() {
        super(TweetController, TweetMiddleware);
    }


    routes(): void {
        this.router.get("/tweets", (req, res) => this.controller.getTweets(req, res));
        this.router.get("/tweet/:id", (req, res) =>
            this.controller.getTweetById(req, res)
        );
        this.router.post("/createTweet", (req, res, next) => [this.middleware.tweetValidator(req, res, next)], (req, res) =>
            this.controller.createTweet(req, res)
        );
        this.router.put("/updateTweet/:id", (req, res) =>
            this.controller.updateTweet(req, res)
        );
        this.router.put("/likeTweet/:id", (req, res) =>
            this.controller.likeTweet(req, res)
        );
        this.router.delete("/deleteTweet/:id", (req, res) =>
            this.controller.deleteTweet(req, res)
        );
    }
}