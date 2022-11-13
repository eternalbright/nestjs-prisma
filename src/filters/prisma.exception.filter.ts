import { ArgumentsHost, BadRequestException, Catch } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';

import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

@Catch()
export class PrismaExceptionFilter extends BaseExceptionFilter {
  override catch(e: unknown, host: ArgumentsHost) {
    if (e instanceof PrismaClientKnownRequestError) {
      throw new BadRequestException(e.meta?.['cause']);
    }

    super.catch(e, host);
  }
}
