import {
    ArgumentsHost, BadRequestException,
    Catch,
    ExceptionFilter,
    HttpException,
    HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';

@Catch()
export class ExceptionsFilter implements ExceptionFilter {
    constructor() {}

    catch(exception: unknown, host: ArgumentsHost): void {
        const context = host.switchToHttp();
        const response = context.getResponse<Response>();

        const status =
            exception instanceof HttpException
                ? exception.getStatus()
                : HttpStatus.INTERNAL_SERVER_ERROR;

        const body = {
            error:
                exception instanceof HttpException
                    ? exception.message
                    : 'Something went wrong',
        };

        // Push error logs to some pipe...
        console.error(exception);

        if (exception instanceof BadRequestException) {
            console.error('Bad request', JSON.stringify(exception.getResponse(), null, 2));
        }

        response.status(status).json(body);
    }
}
