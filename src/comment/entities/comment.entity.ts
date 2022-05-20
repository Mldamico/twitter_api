import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { BaseEntity } from "../../config/base.entity";
import { TweetEntity } from "../../tweets/entities/tweet.entity";


@Entity({ name: 'comment' })
export class CommentEntity extends BaseEntity {

    @Column()
    comment!: string;

    @Column({ nullable: true })
    image?: string;

    @ManyToOne(() => TweetEntity, (tweet) => tweet.comments)
    @JoinColumn({ name: 'tweet_id' })
    tweet?: TweetEntity
}