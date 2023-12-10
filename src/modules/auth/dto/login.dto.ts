import { ApiProperty } from "@nestjs/swagger"
import { IsString, IsEmail, MinLength, IsNotEmpty } from "class-validator"

export class LoginDto {

    @ApiProperty()
    @IsString()
    @IsEmail()
    email: string

    @ApiProperty()
    @IsString()
    @MinLength(11)
    @IsNotEmpty()
    password: string

    

    
}
