import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as passport from 'passport';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.enableCors({
    origin: 'http://localhost:4200'
  });

  // USED AT times of Sessions
  // app.use(
  //   session({
  //     secret: 'rogue47',
  //     resave: false,
  //     saveUninitialized: false,
  //     cookie: { maxAge: 3600000 }
  //   }),
  // );

  // app.use(passport.initialize());
  // app.use(passport.session());

  const config = new DocumentBuilder()
    .setTitle('Swagger Document')
    .setDescription('The Company API description')
    .setVersion('1.0')
    .addTag('users')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);
  
  await app.listen(3000);
}
bootstrap();

