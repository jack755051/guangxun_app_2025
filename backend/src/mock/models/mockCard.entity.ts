import { CardEntity } from 'src/models/entities/card.entity';
import { Entity} from 'typeorm';

@Entity('mock_card')
export class MockCardEntity extends CardEntity {}