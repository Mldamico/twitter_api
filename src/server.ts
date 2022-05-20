import 'reflect-metadata'
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import { UserRouter } from './user/user.router';

import { ConfigServer } from './config/config';
import { DataSource } from 'typeorm';
import { TweetRouter } from './tweets/tweet.router';
import { CommentRouter } from './comment/comment.router';

class ServerBootstrap extends ConfigServer {
    public app: express.Application = express();
    private port = this.getNumberEnv('PORT') || 8000;

    constructor() {
        super()
        this.app.use(express.json())
        this.app.use(express.urlencoded({ extended: true }))
        this.dbConnect()
        this.app.use(morgan('dev'))
        this.app.use(cors())

        this.app.use('/api/v1', this.routers())
        this.listen()
    }

    routers(): Array<express.Router> {
        return [new UserRouter().router, new TweetRouter().router, new CommentRouter().router]
    }

    async dbConnect(): Promise<DataSource | void> {
        return this.initConnect
            .then(() => {
                console.log("Connect Success");
            })
            .catch((err) => {
                console.error(err);
            });
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log("Port: " + this.port)
        })
    }

}


new ServerBootstrap()