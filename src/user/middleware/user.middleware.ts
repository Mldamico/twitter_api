import { validate } from "class-validator";
import { NextFunction, Request, Response } from "express";
import { HttpResponse } from "../../shared/response/http.response";
import { UserDTO } from "../dto/user.dto";


export class UserMiddleware {
    constructor(private readonly httpResponse: HttpResponse = new HttpResponse()) { }
    userValidator(req: Request, res: Response, next: NextFunction) {
        const { username,
            name,
            profileImg,
            email,
            password } = req.body;
        const valid = new UserDTO();

        valid.name = name;
        valid.profileImg = profileImg
        valid.email = email
        valid.password = password
        validate(valid).then((err) => {
            if (err.length > 0) {
                return this.httpResponse.Error(res, err)
            } else {
                next()
            }
        })
    }
}