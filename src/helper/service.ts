import express from "express";

class Service {
    private app: express.Application;

    constructor(app: express.Application) {
        this.app = app;
        this.initializeRoutes();
    }

    private initializeRoutes(): void {
        this.app.get("/", (req: express.Request, res: express.Response) => {
            res.json({example: "your response"});
        });
    }
}

export {Service};
export default Service;
