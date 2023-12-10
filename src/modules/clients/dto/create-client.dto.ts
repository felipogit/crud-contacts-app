import { ApiProperty } from "@nestjs/swagger"
import { hashSync } from "bcryptjs"
import { Transform } from "class-transformer"
import { IsString, IsEmail, MinLength, IsNotEmpty } from "class-validator"

export class CreateClientDto {
    @ApiProperty({
        description:"Client name",
        type: String,
        default: "Felipe Costa"
    })
    @IsString()
    name: string

    @ApiProperty()
    @IsString()
    @IsEmail()
    email: string

    @ApiProperty()
    @IsString()
    @MinLength(11)
    @IsNotEmpty()
    @Transform(({ value}: {value: string}) => hashSync(value , 10),
    {groups: ['transform']})
    password: string

    @ApiProperty()
    @IsString()
    @MinLength(11)
    phone: string

    
}
