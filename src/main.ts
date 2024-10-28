import { patchNestjsSwagger } from '@anatine/zod-nestjs';
import { VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1',
  });

  patchNestjsSwagger();

  const documentConfig = new DocumentBuilder()
    .setTitle('CashBook')
    .setDescription('Description of CashBook API')
    .setVersion('1.0')
    .build();
  const documentFactory = () =>
    SwaggerModule.createDocument(app, documentConfig);
  SwaggerModule.setup('v1', app, documentFactory);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
