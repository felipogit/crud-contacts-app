import { IsString, IsEmail, MinLength, IsNotEmpty } from "class-validator"

export class LoginDto {
    @IsString()
    @IsEmail()
    email: string

    @IsString()
    @MinLength(11)
    @IsNotEmpty()
    password: string

    

    
}
