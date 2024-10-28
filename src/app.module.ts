import { ZodValidationPipe } from '@anatine/zod-nestjs';
import { Module } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';

@Module({
  imports: [],
  providers: [
    {
      provide: APP_PIPE,
      useValue: ZodValidationPipe,
    },
  ],
})
export class AppModule {}
