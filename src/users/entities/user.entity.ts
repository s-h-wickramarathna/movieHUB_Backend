import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('user')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    mobile: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    gender_id: string;

    @Column()
    role_id: string;

    @Column()
    status_id: string;

}
