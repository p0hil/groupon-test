import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { DealsService } from './deals.service';
import { DealDto, DealsFeedDto } from './dto/deal.dto';
import { plainToInstance } from 'class-transformer';

@Controller('deals')
export class DealsController {
    constructor(private readonly dealsService: DealsService) {}

    @Post('feed')
    @HttpCode(200)
    async getFeed(@Body() dto: DealsFeedDto) {
        const maxLimit = 100;
        const defLimit = 6;

        const feed = await this.dealsService.getFeed(
            dto.filter,
            dto.offset ?? 0,
            Math.min(dto.limit ?? defLimit, maxLimit),
        );
        return feed.map(deal => plainToInstance(DealDto, deal));
    }

}
