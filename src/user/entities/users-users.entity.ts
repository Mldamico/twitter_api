import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { BaseEntity } from "../../config/base.entity";
import { UserEntity } from "./user.entity";

@Entity({ name: 'users_users' })
export class UsersUsersEntity extends BaseEntity {

    @ManyToOne(() => UserEntity, (user) => user.id)
    @JoinColumn({ name: 'from_id' })
    from!: UserEntity
    @ManyToOne(() => UserEntity, (user) => user.id)
    @JoinColumn({ name: 'to_id' })
    to!: UserEntity

    @Column()
    message!: string

    @Column({ nullable: true })
    messageImage?: string



}