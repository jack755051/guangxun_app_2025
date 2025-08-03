import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CardController } from './controllers/card/card.controller';
import { CardService } from './business-logic/card/card.service';
// --- Mock Group ---
import { MockCardService } from './mock/business-logic/mock-card/mock-card.service';

@Module({
  imports: [],
  controllers: [AppController, CardController],
  providers: [AppService, CardService, MockCardService],
})
export class AppModule {}
