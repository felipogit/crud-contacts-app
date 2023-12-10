  import { Injectable, NotFoundException } from '@nestjs/common';
  import { CreateContactDto } from './dto/create-contact.dto';
  import { UpdateContactDto } from './dto/update-contact.dto';
  import { PrismaService } from 'src/database/prisma.service';
  import { Contact } from './entities/contact.entity';

  @Injectable()
  export class ContactsService {
    constructor(private prisma: PrismaService) { }
    async create(createContactDto: CreateContactDto, clientId: string) {
      const contact = new Contact();
      Object.assign(contact, {
        ...createContactDto,
      });
    
      const createdContact = await this.prisma.contacts.create({
        data: {
          id: contact.id,
          name: contact.name,
          email: contact.email,
          phone: contact.phone,
          clientId,
        },
      });
      const contactWithClientId = {
        ...createdContact,
        clientId,
      };
    
      return contactWithClientId;
    }
    

    async findAll(clientId: string) {
      const contacts = await this.prisma.contacts.findMany({
        where: { clientId }, 
      });
  
      return contacts;
    }

    async findOne(id: string) {
      const contact = await this.prisma.contacts.findFirst({
        where: { id },
      });
      return contact;
    }

    async update(id: string, updateContactDto: UpdateContactDto) {
      const existingContact = await this.prisma.contacts.findFirst({
        where: { id },
      });
    
      if (!existingContact) {
        throw new NotFoundException(`Contact with ID ${id} not found`);
      }
    
      await this.prisma.contacts.update({
        where: { id },
        data: updateContactDto,
      });
    
      const updatedContact = await this.prisma.contacts.findFirst({
        where: { id },
      });
    
      return updatedContact;
    }
    


    async remove(id: string) {
      const existingContact = await this.prisma.contacts.findFirst({
        where: { id },
      });

      if (!existingContact) {
        throw new NotFoundException(`Contact with ID ${id} not found`);
      }

      await this.prisma.contacts.delete({
        where: { id },
      });

      return `Contact with ID ${id} removed successfully`;
    }
  }

