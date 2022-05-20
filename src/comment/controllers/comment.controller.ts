import { Request, Response } from "express";
import { DeleteResult, UpdateResult } from "typeorm";
import { HttpResponse } from "../../shared/response/http.response";
import { CommentService } from "../services/comment.service";

export class CommentController {
    constructor(private readonly commentService: CommentService = new CommentService(), private readonly httpResponse: HttpResponse = new HttpResponse()) { }
    async getComments(req: Request, res: Response) {
        try {
            const data = await this.commentService.findAllComments()
            if (data.length === 0) return this.httpResponse.NotFound(res, 'No Data')
            return this.httpResponse.Ok(res, data)
        } catch (error) {
            console.log(error)
        }
    }
    async getCommentById(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const data = await this.commentService.findCommentById(id)
            if (!data) return this.httpResponse.NotFound(res, 'No Data')
            return this.httpResponse.Ok(res, data)
        } catch (error) {
            console.log(error)
        }
    }

    async createComment(req: Request, res: Response) {

        try {
            const data = await this.commentService.createComment(req.body)
            return this.httpResponse.Created(res, data)
        } catch (error) {
            console.log(error)
        }
    }

    async updateComment(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const data: UpdateResult = await this.commentService.updateComment(id, req.body)
            if (!data.affected) return this.httpResponse.NotFound(res, 'Update Error')
            return this.httpResponse.Ok(res, data)
        } catch (error) {
            console.log(error)
        }
    }
    async deleteComment(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const data: DeleteResult = await this.commentService.deleteComment(id)
            if (!data.affected) return this.httpResponse.NotFound(res, 'Delete Error')
            return this.httpResponse.Ok(res, data)
        } catch (error) {
            console.log(error)
        }
    }
}