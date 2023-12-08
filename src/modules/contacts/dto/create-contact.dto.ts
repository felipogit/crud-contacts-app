import { IsString, IsEmail, MinLength, IsNotEmpty, IsOptional } from "class-validator"

export class CreateContactDto {
    @IsString()
    name: string;

    @IsString()
    @IsEmail()
    email: string;

    @IsString()
    @MinLength(11)
    phone: string;

    @IsString()
    @IsOptional()
    clientId?: string
}
