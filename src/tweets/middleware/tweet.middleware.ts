import { validate } from "class-validator";
import { NextFunction, Request, Response } from "express";
import { HttpResponse } from "../../shared/response/http.response";
import { TweetDto } from "../dto/tweet.dto";


export class TweetMiddleware {
    constructor(private readonly httpResponse: HttpResponse = new HttpResponse()) { }
    tweetValidator(req: Request, res: Response, next: NextFunction) {
        const { tweet, imagePath } = req.body;
        const valid = new TweetDto();

        valid.tweet = tweet;
        valid.imagePath = imagePath
        valid.likeCount = 0

        validate(valid).then((err) => {
            if (err.length > 0) {
                return this.httpResponse.Error(res, err)
            } else {
                next()
            }
        })
    }
}