import { validate } from "class-validator";
import { NextFunction, Request, Response } from "express";
import { HttpResponse } from "../../shared/response/http.response";
import { commentDTO } from "../dto/comment.dto";


export class CommentMiddleware {
    constructor(private readonly httpResponse: HttpResponse = new HttpResponse()) { }
    commentValidator(req: Request, res: Response, next: NextFunction) {
        const { comment, image } = req.body;
        const valid = new commentDTO();

        valid.comment = comment;
        valid.image = image

        validate(valid).then((err) => {
            if (err.length > 0) {
                return this.httpResponse.Error(res, err)
            } else {
                next()
            }
        })
    }
}