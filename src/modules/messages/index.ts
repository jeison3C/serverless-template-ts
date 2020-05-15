//import { ValidateInformation } from '../types/validate_Information.type';

import { APIGatewayProxyResult } from "aws-lambda"

function ValidateInformation (data?: { message?: string | null, errors?: any }) : APIGatewayProxyResult {
    let defaultMessage = 'Validar la información Suministrada'
    if(!data){
        data = {
            message: defaultMessage
        }
    }

    if(!data.message){
        data.message = defaultMessage
    }

    return {
        statusCode: 400,
        body: JSON.stringify(data)
    }
}

 function IncorrectAuth() {
    return {
        statusCode: 401,
        body: JSON.stringify({
            message: "Autenticacion incorecta o Usuario no Autorizado"
        }),
    }
}

function NotFound(msg: string = 'Recurso no encontrado'){
    return {
        statusCode: 404,
        body: JSON.stringify({
            msg: msg
        })
    }
}

function NotAutorized() {
    return {
        statusCode: 401,
        body: JSON.stringify({
            message: "Acceso no autorizado"
        }),
    }
}

function Success(created: boolean = true){
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: created ? "Información almacenada correctamente" : "Información actualizada correctamente",
        }),
    };
}

function ResponseData(data: any){
    return {
        statusCode: 200,
        body: JSON.stringify(data),
    };
}

export {
    ResponseData,
    ValidateInformation,
    NotFound,
    Success,
    NotAutorized,
    IncorrectAuth
}
