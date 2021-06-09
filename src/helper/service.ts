import express from "express";

module .exports = class Service {
    #app: express.Application;

    constructor(app: express.Application) {
        this.#app = app;
        this.#initializeRoutes();
    }

    #initializeRoutes(): void {

        this.#app.get("/", (req: express.Request, res: express.Response) => {
            res.json({example: "your response"});
        });

    }
}
