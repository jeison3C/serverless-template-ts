const Validator = require('validatorjs')
const createError = require('http-errors')
const {ValidateInformation} = require('../messages')

function errorInformation(errors) {
    let response = ValidateInformation({errors})

    return createError(response.statusCode, response.body)
}

const validatorMiddleware = (config) => {

    return ({
        before: ({event}, next) => {
            try {
                let rules = require('../rules/' + config + ".rule")
                rules = rules.default
                let validation = new Validator(event.body, rules)

                if (validation.fails()) {

                    return next(errorInformation(validation.errors.errors))
                }

                next()
            } catch (e) {
                console.log(e)
                return next(createError(500, JSON.stringify({message: "Las reglas de validación no tienen un formato válido"})))
            }
        },
        after: (_, next) => {
            next()
        },
        onError: (_, next) => {
            next()
        }
    })
}

export {validatorMiddleware}
