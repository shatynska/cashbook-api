import { VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import helmet from 'helmet';
import { patchNestJsSwagger as patchSwaggerToUseZod } from 'nestjs-zod';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1',
  });

  patchSwaggerToUseZod();

  const documentConfig = new DocumentBuilder()
    .setTitle('CashBook')
    .setDescription('Description of CashBook API')
    .setVersion('1.0')
    .build();
  const documentFactory = () =>
    SwaggerModule.createDocument(app, documentConfig);
  SwaggerModule.setup('v1', app, documentFactory);

  app.enableCors();
  app.use(helmet());

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
