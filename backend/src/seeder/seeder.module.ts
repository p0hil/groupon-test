import { Module } from '@nestjs/common';
import { SeederService } from './seeder.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Deal, DealSchema } from '../db/models/deal.model';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Deal.name, schema: DealSchema }]),
    ],
    providers: [SeederService],
})
export class SeederModule {}
