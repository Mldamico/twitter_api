import { Column, Entity, OneToMany } from "typeorm";
import { BaseEntity } from "../../config/base.entity";
import { UsersUsersEntity } from "./users-users.entity";
import { TweetEntity } from "../../tweets/entities/tweet.entity";
import { Exclude } from "class-transformer";
import { RoleType } from "../dto/user.dto";

@Entity({ name: 'user' })
export class UserEntity extends BaseEntity {
    @Column()
    username!: string;

    @Column()
    name!: string;

    @Column()
    profileImg!: string

    @Column()
    email!: string;

    @Exclude()
    @Column()
    password!: string;

    @Column({ type: 'enum', enum: RoleType, nullable: false })
    role!: RoleType;

    @OneToMany(() => TweetEntity, (tweet) => tweet.user)
    tweets!: TweetEntity[]


}