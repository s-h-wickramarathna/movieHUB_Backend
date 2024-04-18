import { IsNotEmpty, IsNumberString } from "class-validator";

export class CreateMovieDto {

    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    description: string;

    @IsNotEmpty()
    duration: string;

    @IsNotEmpty()
    released: string;

    @IsNotEmpty()
    countries: string;

    @IsNotEmpty()
    genre: string;

    @IsNotEmpty()
    cast: string;

    @IsNotEmpty()
    production: string;

    @IsNotEmpty()
    @IsNumberString()
    status_id: number

    @IsNotEmpty()
    url: string;

}
