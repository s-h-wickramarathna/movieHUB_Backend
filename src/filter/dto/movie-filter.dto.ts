import { IsOptional } from "class-validator";

export class MovieFilterDto {

    @IsOptional()
    name: string;

    @IsOptional()
    year: string;

    @IsOptional()
    country: string;

    @IsOptional()
    Date: string;
}
