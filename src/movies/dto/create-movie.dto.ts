import { IsNotEmpty } from "class-validator";

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

}
