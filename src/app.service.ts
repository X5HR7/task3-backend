import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  getAllMessages() {
    return this.prisma.message.findMany();
  }

  createMessage(message: string) {
    return this.prisma.message.create({
      data: { text: message },
    });
  }
}
