import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MockCardEntity } from 'src/mock/models/mockCard.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MockCardService {
    constructor(
        @InjectRepository(MockCardEntity)
        private mockCardRepo: Repository<MockCardEntity>,
    ) { }
    
    /** Build Mock Card List */
    async buildMockCardList(dto: Partial<MockCardEntity>): Promise<MockCardEntity> {
        const cards = this.mockCardRepo.create(dto);
        return await this.mockCardRepo.save(cards);
    }
    /** Get Mock Card List */
    async getMockCardList(): Promise<MockCardEntity[]> {
        return this.mockCardRepo.find();
    }
    /** Get Mock Card by ID */
    async getMockCardById(id: string): Promise<MockCardEntity> { 
        const card = await this.mockCardRepo.findOneBy({ id });
        if (!card) {
            throw new NotFoundException(`Mock card with ID ${id} not found`);
        }
        return card;
    }
    /** Delete Mock Card by ID */
    async deleteMockCardById(id: string): Promise<void> {
        await this.mockCardRepo.delete({ id });
    }
    /** Update Mock Card */
    async updateMockCard(id: string, updateData: Partial<MockCardEntity>): Promise<MockCardEntity> {
        const existingCard = await this.mockCardRepo.findOneBy({ id });
        if (!existingCard) {
            throw new NotFoundException(`Mock card with ID ${id} not found`);
        }
        await this.mockCardRepo.update(id, updateData);
        return this.getMockCardById(id);
    }   
}
