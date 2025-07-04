import { Module } from '@nestjs/common';
import { DealsService } from './deals.service';
import { DealsController } from './deals.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Deal, DealSchema } from '../db/models/deal.model';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Deal.name, schema: DealSchema }
        ])
    ],
    controllers: [DealsController],
    providers: [DealsService],
})
export class DealsModule {}
