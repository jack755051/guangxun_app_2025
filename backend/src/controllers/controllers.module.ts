import { Module } from '@nestjs/common';
import { CardController } from './card/card.controller';
import { BusinessLogicModule } from 'src/business-logic/business-logic.module';

@Module({
  imports: [BusinessLogicModule],
  controllers: [CardController],
  providers: [],
})
export class ControllersModule {}
