import { Context, APIGatewayProxyResult, APIGatewayEventDefaultAuthorizerContext, APIGatewayEventRequestContextWithAuthorizer } from "aws-lambda";

interface APIGatewayProxyEventBase<TAuthorizerContext, Body, PathParams, QueryStringParameters> {
    body: Body | null;
    headers: { [name: string]: string };
    multiValueHeaders: { [name: string]: string[] };
    httpMethod: string;
    isBase64Encoded: boolean;
    path: string;
    pathParameters: PathParams | null;
    queryStringParameters: QueryStringParameters | null;
    multiValueQueryStringParameters: { [name: string]: string[] } | null;
    stageVariables: { [name: string]: string } | null;
    requestContext: APIGatewayEventRequestContextWithAuthorizer<TAuthorizerContext>;
    resource: string;
}

type APIGatewayProxyEvent<Body, PathParams, QueryStringParameters> = APIGatewayProxyEventBase<APIGatewayEventDefaultAuthorizerContext, Body, PathParams, QueryStringParameters>

type HandlerFunction<Body = any, PathParams = { [name: string]: string }, QueryStringParameters = { [name: string]: string }>
    = (event: APIGatewayProxyEvent<Body, PathParams, QueryStringParameters>, context: Context) => Promise<APIGatewayProxyResult>

export { HandlerFunction }
