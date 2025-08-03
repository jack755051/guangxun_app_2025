import { Controller, Get } from '@nestjs/common';
import { CardService } from 'src/business-logic/card/card.service';

@Controller('card')
export class CardController {

    constructor(private _cardService: CardService) {}

    @Get('/cardList')
    getCardList() {
        return this._cardService.getCardList();
    }
}