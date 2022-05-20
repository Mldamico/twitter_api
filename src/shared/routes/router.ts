import { Router } from "express";

export abstract class BaseRouter<T, K> {
    public router: Router;
    public controller: T;
    public middleware: K
    constructor(TController: { new(): T }, KMiddleware: { new(): K }) {
        this.router = Router();
        this.controller = new TController
        this.middleware = new KMiddleware
        this.routes()
    }

    routes() { }
}