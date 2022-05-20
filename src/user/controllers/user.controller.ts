import { Request, Response } from "express";
import { DeleteResult, UpdateResult } from "typeorm";
import { HttpResponse } from "../../shared/response/http.response";
import { UserService } from "../services/user.service";

export class UserController {
    constructor(private readonly userService: UserService = new UserService(), private readonly httpResponse: HttpResponse = new HttpResponse()) { }
    async getUsers(req: Request, res: Response) {
        try {
            const data = await this.userService.findAllUser()
            if (data.length === 0) return this.httpResponse.NotFound(res, 'No Data')
            return this.httpResponse.Ok(res, data)
        } catch (error) {
            return this.httpResponse.Error(res, error)
        }
    }
    async getUserById(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const data = await this.userService.findUserById(id)
            if (!data) return this.httpResponse.NotFound(res, 'No Data')
            return this.httpResponse.Ok(res, data)
        } catch (error) {
            return this.httpResponse.Error(res, error)
        }
    }

    async getUserTweets(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const data = await this.userService.findUserTweets(id)
            if (!data) return this.httpResponse.NotFound(res, 'No Data')
            return this.httpResponse.Ok(res, data)
        } catch (error) {
            return this.httpResponse.Error(res, error)
        }
    }


    async createUser(req: Request, res: Response) {

        try {
            const data = await this.userService.createUser(req.body)
            return this.httpResponse.Created(res, data)
        } catch (error) {
            return this.httpResponse.Error(res, error)
        }
    }

    async updateUser(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const data: UpdateResult = await this.userService.updateUser(id, req.body)
            if (!data.affected) return this.httpResponse.NotFound(res, 'Update Error')
            return this.httpResponse.Ok(res, data)
        } catch (error) {
            return this.httpResponse.Error(res, error)
        }
    }
    async deleteUser(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const data: DeleteResult = await this.userService.deleteUser(id)
            if (!data.affected) return this.httpResponse.NotFound(res, 'Delete Error')
            return this.httpResponse.Ok(res, data)
        } catch (error) {
            return this.httpResponse.Error(res, error)
        }
    }
}