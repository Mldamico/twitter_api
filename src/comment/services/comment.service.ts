import { DeleteResult, UpdateResult } from "typeorm";
import { BaseService } from "../../config/base.service";
import { commentDTO } from "../dto/comment.dto";
import { CommentEntity } from "../entities/comment.entity";
export class CommentService extends BaseService<CommentEntity> {
    constructor() {
        super(CommentEntity);
    }

    async findAllComments(): Promise<CommentEntity[]> {
        return (await this.execRepository).find();
    }
    async findCommentById(id: string): Promise<CommentEntity | null> {
        return (await this.execRepository).findOneBy({ id });
    }
    async createComment(body: commentDTO): Promise<CommentEntity> {
        return (await this.execRepository).save(body);
    }
    async deleteComment(id: string): Promise<DeleteResult> {
        return (await this.execRepository).delete({ id });
    }
    async updateComment(id: string, infoUpdate: commentDTO): Promise<UpdateResult> {
        return (await this.execRepository).update(id, infoUpdate);
    }
}