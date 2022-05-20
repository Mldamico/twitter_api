import { Response } from "express";


export enum HttpStatus {
    OK = 200,
    CREATED = 201,
    NOT_FOUND = 404,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    INTERNAL_SERVER_ERROR = 500
}

export class HttpResponse {
    Ok(res: Response, data?: any): Response {
        return res.status(HttpStatus.OK).json({
            status: HttpStatus.OK,
            statusMessage: 'Success',
            data
        })
    }
    Created(res: Response, data?: any): Response {
        return res.status(HttpStatus.CREATED).json({
            status: HttpStatus.CREATED,
            statusMessage: 'Created',
            data
        })
    }
    NotFound(res: Response, data?: any): Response {
        return res.status(HttpStatus.NOT_FOUND).json({
            status: HttpStatus.NOT_FOUND,
            statusMessage: 'Not Found',
            error: data
        })
    }
    UnAuthorized(res: Response, data?: any): Response {
        return res.status(HttpStatus.UNAUTHORIZED).json({
            status: HttpStatus.UNAUTHORIZED,
            statusMessage: 'Unauthroized',
            error: data
        })
    }
    Forbidden(res: Response, data?: any): Response {
        return res.status(HttpStatus.FORBIDDEN).json({
            status: HttpStatus.FORBIDDEN,
            statusMessage: 'Forbidden',
            error: data
        })
    }
    Error(res: Response, data?: any): Response {
        return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
            status: HttpStatus.INTERNAL_SERVER_ERROR,
            statusMessage: 'Internal Server Error',
            error: data
        })
    }
}