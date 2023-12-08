import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ClientsService } from '../clients/clients.service';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcryptjs';

@Injectable()
export class AuthService {
    constructor(
        private readonly clientsService: ClientsService,
        private readonly jwtService: JwtService,
    ) { }

    async login(email: string, password: string) {
        const client = await this.clientsService.findByEmail(email)
        if (!client) {
            throw new UnauthorizedException('Invalide email or password')
        }

        const isPasswordValid = await compare(password, client.password)
        if (!isPasswordValid) {
            throw new UnauthorizedException('Invalide email or password')
        }

        return {
            token: this.jwtService.sign({ email:email }, { subject: client.id }),
        }
    }
}
