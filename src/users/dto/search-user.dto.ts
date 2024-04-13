import { IsNotEmpty, IsString } from "class-validator";

export class SearchUserDTO {
    
    @IsNotEmpty()
    @IsString()
    searchText: string
}