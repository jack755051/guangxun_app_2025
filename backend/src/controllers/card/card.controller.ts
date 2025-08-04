import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { CardService } from 'src/business-logic/card/card.service';
import { CardEntity } from 'src/models';

@Controller('cards')
export class CardController {

    constructor(private _cardService: CardService) {}

    @Get('/cardList')
    getCardList() {
        return this._cardService.getCardList();
    }

    @Get(':id')
    getCardById(id: string) {
        return this._cardService.getCardById(id);
    }

    @Post()
    create(@Body() cardData: Partial<CardEntity>): Promise<CardEntity> {
        return this._cardService.buildCard(cardData);
    }

    @Delete(':id')
    delete(id: string): Promise<void> {
        return this._cardService.deleteCardById(id);
    }
}