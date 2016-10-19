import * as express from "express";

let testRouter = express.Router();
testRouter.get('/', (request: express.Request, response: express.Response) => {
    let testData = {
        test: "passed",
    }
    response.send(testData);
});

export default testRouter;