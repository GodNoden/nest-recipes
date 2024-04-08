import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { cors } from 'cors';



async function bootstrap() {

  const cors = require("cors");
  const corsOptions = {
    origin: '*',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200,
  };

  const port = 8080;
  const app = await NestFactory.create(AppModule);
  app.use(cors(corsOptions));
  await app.listen(port);
  console.log("http://localhost:" + port);

}
bootstrap();
