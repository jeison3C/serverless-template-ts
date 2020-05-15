import createError from 'http-errors'
import {ValidateToken} from '../utils'

function authFail() {
    return createError(401, JSON.stringify({message: "Autenticación incorecta / Token no válido"}))
}

const AuthMiddleware = () => {
    return ({
        before: ({event}, next) => {
            const headers = event.headers;

            if (!headers)
                return next(authFail())

            let token = headers.Authorization

            if (!token) {
                return next(authFail())
            }

            token = token.replace("Bearer", "");
            token = token.trim();

            let user = ValidateToken(token);

            if (!user) {
                return next(authFail())
            }

            event.user = user

            next()
        },
        after: (_, next) => {
            next()
        },
        onError: (_, next) => {

            next()
        }
    })
}

export default AuthMiddleware