import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Client } from './entities/client.entity';
import { PrismaService } from 'src/database/prisma.service';
import { plainToInstance } from 'class-transformer';



@Injectable()
export class ClientsService {
  constructor(private prisma: PrismaService) { }
  async create(createClientDto: CreateClientDto) {
    const client = await this.prisma.client.findFirst({
      where: {
        email: createClientDto.email
      }
    })

    if (client) {
      throw new ConflictException("Client already exists")
    }

    const newClient = new Client()
    Object.assign(newClient, {
      ...createClientDto
    })

    await this.prisma.client.create({
      data: { ...newClient },
    })

    return plainToInstance(Client, newClient)

  }

  async findByEmail(email: string) {
    const client = await this.prisma.client.findFirst({
      where: {
        email
      }
    })

    return client
  }

  async findAll() {
    const findUsers = await this.prisma.client.findMany();
    return plainToInstance(Client, findUsers);
  }

  async findOne(id: string) {
    const client = await this.prisma.client.findUnique({
      where: { id },
    })
    if (!client) {
      throw new NotFoundException("Client not found")
    }
    return plainToInstance(Client, client)
  }

  async update(id: string, updateClientDto: UpdateClientDto) {
    const client = await this.prisma.client.findUnique({
      where: { id },
    })
    if (!client) {
      throw new NotFoundException("Client not found")
    }

    const updatedClient = await this.prisma.client.update({
      where: { id },
      data: {
        ...updateClientDto
      }
    })

    return plainToInstance(Client, updatedClient)
  }

  async remove(id: string) {
    const client = this.prisma.client.findUnique({
      where: { id },
    })
    if (!client) {
      throw new NotFoundException("Client not found")
    }

    await this.prisma.client.delete({
      where: { id },
    })
    
  }
  
}
