import { Catch, ArgumentsHost, BadRequestException } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';

import { PrismaClientKnownRequestError } from '@prisma/client/runtime';

@Catch()
export class DatabaseExceptionsFilter extends BaseExceptionFilter {
  override catch(e: unknown, host: ArgumentsHost) {
    if (e instanceof PrismaClientKnownRequestError) {
      throw new BadRequestException(e.meta?.['cause']);
    }

    super.catch(e, host);
  }
}
