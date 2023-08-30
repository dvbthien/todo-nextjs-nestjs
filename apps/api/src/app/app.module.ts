import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TodoModule } from '../todo/todo.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://thiendang:Winlun123@clustertodo.yp5tvkh.mongodb.net/TodoDB?retryWrites=true&w=majority'), TodoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
