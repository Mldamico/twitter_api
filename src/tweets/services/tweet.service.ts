import { DeleteResult, UpdateResult } from "typeorm";
import { BaseService } from "../../config/base.service";
import { TweetDto } from "../dto/tweet.dto";
import { TweetEntity } from "../entities/tweet.entity";

export class TweetService extends BaseService<TweetEntity> {
    constructor() {
        super(TweetEntity);
    }

    async findAllTweets(): Promise<TweetEntity[]> {
        return (await this.execRepository).find();
    }
    async findTweetById(id: string): Promise<TweetEntity | null> {
        return (await this.execRepository).findOneBy({ id });
    }
    async createTweet(body: TweetDto): Promise<TweetEntity> {
        return (await this.execRepository).save(body);
    }
    async deleteTweet(id: string): Promise<DeleteResult> {
        return (await this.execRepository).delete({ id });
    }
    async updateTweet(id: string, infoUpdate: TweetDto): Promise<UpdateResult> {
        return (await this.execRepository).update(id, infoUpdate);
    }

    async likeTweet(tweet: TweetEntity): Promise<TweetEntity> {
        return (await this.execRepository).save(tweet)
    }


}