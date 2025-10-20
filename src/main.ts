import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
import * as dotenv from 'dotenv';
import * as bodyParser from 'body-parser';
import yaml from 'js-yaml';
import fs from 'fs-extra';
import * as swaggerUi from 'swagger-ui-express';
import { AuthService } from './modules/auth/auth.service';
import * as path from 'path';
import './swagger/vj-ota-api.json';

async function appStart() {
  dotenv.config();

  const app = await NestFactory.create(AppModule);

  const swaggerJsonPath = path.join(__dirname, './swagger/vj-ota-api.json');

  const swaggerDocument = await fs.readJson(swaggerJsonPath);

  app.use('/api-docs-ui', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

  app.getHttpAdapter().get('/api-docs', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerDocument);
  });

  const corsOptions: CorsOptions = {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: '*',
  };

  AuthService.storeToken('');
  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
  app.enableCors(corsOptions);

  const port = process.env.PORT || 3001;
  await app.listen(port);
  console.log(`Application is running on port ${port}`);
}
appStart();
