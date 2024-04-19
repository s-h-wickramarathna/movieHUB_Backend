import { IsNotEmpty, IsString } from "class-validator";

export class SearchUserDTO {
    @IsString()
    searchText: string
}