import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CardEntity } from "src/models";
import { CardService } from "./card/card.service";

@Module({
    imports: [TypeOrmModule.forFeature([CardEntity])],
    exports: [CardService],
    controllers: [],
    providers: [CardService],
})
export class BusinessLogicModule {}