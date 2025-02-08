import { APIGatewayProxyEventV2, Callback, Context, Handler } from 'aws-lambda';
import servelessExpress from '@codegenie/serverless-express';
import { configureApp } from './app';

let server: Handler;

async function bootstrap() {
  const app = await configureApp();

  return servelessExpress({
    app
  });
}

export const handler: Handler = async (event: APIGatewayProxyEventV2, context: Context, callback: Callback) => {
  server = server || (await bootstrap());

  return await server(event, context, callback);
};
