// src/doc.ts
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as packageConfig from '../package.json';
import { INestApplication } from '@nestjs/common';

export const generateDocument = (app: INestApplication<any>) => {
  const options = new DocumentBuilder()
    .setTitle(packageConfig.name)
    .setDescription(packageConfig.description)
    .setVersion(packageConfig.version)
    .addBearerAuth() // 允许tonken鉴权
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/api/doc', app, document);
};
