import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CardEntity } from 'src/models/entities/card.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CardService {
    
    constructor(
        @InjectRepository(CardEntity)
        private cardRepo: Repository<CardEntity>,
    ) { }
    
    /** Build Card */
    async buildCard(cardData: Partial<CardEntity>): Promise<CardEntity> {
        const card = this.cardRepo.create(cardData);
        return await this.cardRepo.save(card);
    }
    
    /** Get All Cards */
    async getCardList(): Promise<CardEntity[]> {
        return this.cardRepo.find();
    }
    
    /** Get Card by ID */
    async getCardById(id: string): Promise<CardEntity> { 
        const card = await this.cardRepo.findOneBy({ id });
        if (!card) {
            throw new NotFoundException(`Card with ID ${id} not found`);
        }
        return card;
    }
    
    /** Delete Card by ID */
    async deleteCardById(id: string): Promise<void> {
        await this.cardRepo.delete({ id });
    }
    
    /** Update Card */
    async updateCard(id: string, updateData: Partial<CardEntity>): Promise<CardEntity> {
        const existingCard = await this.cardRepo.findOneBy({ id });
        if (!existingCard) {
            throw new NotFoundException(`Card with ID ${id} not found`);
        }
        await this.cardRepo.update(id, updateData);
        return this.getCardById(id);
    }
}
