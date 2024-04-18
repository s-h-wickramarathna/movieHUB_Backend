import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Movie } from "./movie.entity";

@Entity()
export class Review{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    watchCount: number;

    @OneToOne(() => Movie)
    @JoinColumn()
    movie: Movie 
}