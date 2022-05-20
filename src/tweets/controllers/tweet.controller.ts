import { Request, Response } from "express";
import { DeleteResult, UpdateResult } from "typeorm";
import { HttpResponse } from "../../shared/response/http.response";
import { TweetService } from "../services/tweet.service";

export class TweetController {
    constructor(private readonly tweetService: TweetService = new TweetService(), private readonly httpResponse: HttpResponse = new HttpResponse()) { }
    async getTweets(req: Request, res: Response) {
        try {
            const data = await this.tweetService.findAllTweets()
            if (data.length === 0) return this.httpResponse.NotFound(res, 'No Data')
            return this.httpResponse.Ok(res, data)
        } catch (error) {
            console.log(error)
        }
    }
    async getTweetById(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const data = await this.tweetService.findTweetById(id)
            if (!data) return this.httpResponse.NotFound(res, 'No Data')
            return this.httpResponse.Ok(res, data)
        } catch (error) {
            console.log(error)
        }
    }

    async likeTweet(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const tweet = await this.tweetService.findTweetById(id)
            if (!tweet) return this.httpResponse.NotFound(res, 'No Data')
            tweet.likeCount += 1
            const data = await this.tweetService.likeTweet(tweet)
            return this.httpResponse.Ok(res, data)
        } catch (error) {
            console.log(error)
        }
    }



    async createTweet(req: Request, res: Response) {

        try {
            const data = await this.tweetService.createTweet(req.body)
            return this.httpResponse.Created(res, data)
        } catch (error) {
            console.log(error)
        }
    }

    async updateTweet(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const data: UpdateResult = await this.tweetService.updateTweet(id, req.body)
            if (!data.affected) return this.httpResponse.NotFound(res, 'Update Error')
            return this.httpResponse.Ok(res, data)
        } catch (error) {
            console.log(error)
        }
    }
    async deleteTweet(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const data: DeleteResult = await this.tweetService.deleteTweet(id)
            if (!data.affected) return this.httpResponse.NotFound(res, 'Delete Error')
            return this.httpResponse.Ok(res, data)
        } catch (error) {
            console.log(error)
        }
    }
}