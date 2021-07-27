import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import typeormConfigAsync from "../ormconfig-async";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [],
      inject: [],
      useFactory: typeormConfigAsync
    })
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
