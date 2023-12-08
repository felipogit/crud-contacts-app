import { Injectable } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { PrismaService } from 'src/database/prisma.service';
import { Contact } from './entities/contact.entity';

@Injectable()
export class ContactsService {
  constructor(private prisma: PrismaService) { }
 async create(createContactDto: CreateContactDto) {
    const contact = new Contact();
    Object.assign(contact, {
      ...createContactDto
    })

    const clientId = createContactDto.clientId

    await this.prisma.contacts.create({
      data:{
        id: contact.id,
        name: contact.email,
        email: contact.email,
        phone: contact.phone,
        clientId,
      }
    })

    return contact
  }

  async findAll() {
    const contact = await this.prisma.contacts.findMany();

    return contact
  }

   async findOne(id: string) {
    const contact = await this.prisma.contacts.findFirst({
      where: { id },
    });
    return contact;
  }

  async update(id: string, updateContactDto: UpdateContactDto) {
    return ""
  }

  remove(id: string) {
    return `This action removes a #${id} contact`;
  }
}
