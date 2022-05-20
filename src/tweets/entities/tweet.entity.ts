import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { CommentEntity } from "../../comment/entities/comment.entity";
import { BaseEntity } from "../../config/base.entity";
import { UserEntity } from "../../user/entities/user.entity";

@Entity({ name: 'tweet' })
export class TweetEntity extends BaseEntity {
    @Column({ length: 280 })
    tweet!: string

    @Column()
    imagePath?: string

    @Column({ default: 0 })
    likeCount!: number


    @OneToMany(() => CommentEntity, (comment) => comment.tweet)
    comments?: CommentEntity[]

    @ManyToOne(() => UserEntity, (user) => user.tweets)
    @JoinColumn({ name: 'user_id' })
    user!: UserEntity
}