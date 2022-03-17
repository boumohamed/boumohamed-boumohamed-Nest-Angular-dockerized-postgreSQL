import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe(
    {
      whitelist:true // accept only what i wanted from the request
    }
  ));
  app.enableCors(); // cor headers problem
  await app.listen(3000);
}
bootstrap();
