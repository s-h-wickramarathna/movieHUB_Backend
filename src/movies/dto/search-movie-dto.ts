import { IsNotEmpty, IsString } from "class-validator";

export class SearchMovieDTO{
    @IsNotEmpty()
    @IsString()
    searchText: string
}