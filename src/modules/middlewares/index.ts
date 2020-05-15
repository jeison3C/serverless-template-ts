import middy from 'middy';
import { doNotWaitForEmptyEventLoop, httpErrorHandler, cors, jsonBodyParser } from 'middy/middlewares'
import authMiddleware from "./auth";

const BaseMiddleware = (callback) => {
    return middy(callback)
        .use(doNotWaitForEmptyEventLoop())
        .use(httpErrorHandler())
        .use(cors())
        .use(jsonBodyParser())
};

const AuthMiddleware = (callback) => {
    return BaseMiddleware(callback).use(authMiddleware())
}

export { validatorMiddleware } from './validator';
export {
    BaseMiddleware,
    AuthMiddleware
}