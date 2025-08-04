import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('card')
export class CardEntity { 
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ length: 500 , nullable: true})
    imageUrl: string;

    @Column({ length: 200 })
    title: string;

    @Column({ length: 500 })
    subTitle: string;

    @Column({ length: 1000 })
    description: string;

    @Column("simple-array", { nullable: true })
    tags: string[];

    @Column({ length: 200 })
    createdBy: string;

    @CreateDateColumn()
    createdAt: Date;
}