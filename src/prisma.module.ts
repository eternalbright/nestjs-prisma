import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';

import { PrismaExceptionFilter } from './filters/prisma.exception.filter';
import { PrismaService } from './services/prisma.service';

@Module({
  exports: [PrismaService],
  providers: [
    PrismaService,
    {
      provide: APP_FILTER,
      useClass: PrismaExceptionFilter,
    },
  ],
})
export class PrismaModule {}
