import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('movie')
export class Movie {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    img: string;

    @Column()
    description: string;

    @Column()
    duration: string;

    @Column()
    released: string;

    @Column()
    countries: string;

    @Column()
    genre: string;

    @Column()
    cast: string;

    @Column()
    production: string;

    @Column()
    status_id: number;

    @Column()
    url: string;
}
