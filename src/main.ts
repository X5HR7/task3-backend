import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigModule } from '@nestjs/config';
import * as process from 'process';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  ConfigModule.forRoot();
  const { PORT = 3000 } = process.env;

  app.enableCors({
    origin: ['http://localhost:5173'],
    credentials: true,
    exposedHeaders: 'set-cookie'
  });

  await app.listen(PORT);
}
bootstrap();
