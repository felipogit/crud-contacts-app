import { hashSync } from "bcryptjs"
import { Transform } from "class-transformer"
import { IsString, IsEmail, MinLength, IsNotEmpty } from "class-validator"

export class CreateClientDto {

    @IsString()
    name: string

    @IsString()
    @IsEmail()
    email: string

    @IsString()
    @MinLength(11)
    @IsNotEmpty()
    @Transform(({ value}: {value: string}) => hashSync(value , 10),
    {groups: ['transform']})
    password: string

    @IsString()
    @MinLength(11)
    phone: string

    
}
