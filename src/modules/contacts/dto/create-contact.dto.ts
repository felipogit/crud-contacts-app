import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsEmail, MinLength, IsNotEmpty, IsOptional } from "class-validator"

export class CreateContactDto {
    @ApiProperty()
    @IsString()
    name: string;
    
    @ApiProperty()
    @IsString()
    @IsEmail()
    email: string;

    @ApiProperty()
    @IsString()
    @MinLength(11)
    phone: string;

    
}
