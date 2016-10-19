import * as express from "express";

import testRouter from "./testRouter";

export class WebApi {

    constructor(private app: express.Application, private port: number) {        
        this.configureRoutes(app);
    }

    private configureRoutes(app: express.Application) {
        app.use("/test", testRouter );
    }

    public run() {
        this.app.listen(this.port);
    }
}