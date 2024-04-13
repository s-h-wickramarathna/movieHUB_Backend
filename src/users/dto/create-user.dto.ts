import { IsEmail, IsNotEmpty, IsNumber, IsNumberString, IsPhoneNumber, } from 'class-validator';

export class CreateUserDto {
    @IsNotEmpty()
    firstName: string;

    @IsNotEmpty()
    lastName: string;

    @IsNotEmpty()
    @IsNumberString()
    mobile: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    password: string;

    @IsNumberString()
    gender_id: string;

    @IsNumberString()
    role_id: string;

    @IsNumberString()
    status_id: string;
}
