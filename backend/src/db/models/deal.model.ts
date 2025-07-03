import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ id: false })
export class Location {
    @Prop()
    id: string;

    @Prop({
        type: { type: String, enum: ['Point'], required: true },
        coordinates: {
            type: [Number], // [lng, lat]
            required: true,
        },
    })
    location: {
        type: 'Point';
        coordinates: [number, number];
    };

    @Prop()
    address?: string;

    @Prop()
    city: string;

    @Prop()
    state: string;

    @Prop()
    zipCode: string;
}

const LocationSchema = SchemaFactory.createForClass(Location);

@Schema({ collection: 'deals', id: true })
export class Deal {
    @Prop()
    title: string;

    @Prop()
    description: string;

    @Prop()
    originalPrice: number;

    @Prop({ index: true })
    discountPrice: number;

    @Prop({ index: true })
    discountPercentage: number;

    @Prop()
    category: string;

    @Prop()
    subcategory: string;

    @Prop()
    tags: string[];

    @Prop({ type: LocationSchema })
    location: Location;

    @Prop()
    merchantName: string;

    @Prop({ index: true })
    merchantRating: number;

    @Prop()
    quantitySold: number;

    @Prop()
    expiryDate: Date;

    @Prop()
    featuredDeal: boolean;

    @Prop()
    imageUrl: string;

    @Prop({ type: [LocationSchema] })
    redemptionLocations: Location[];

    @Prop()
    finePrint?: string;

    @Prop()
    reviewCount: number;

    @Prop()
    averageRating: number;

    @Prop()
    availableQuantity: number;

    // Mapped by aggregation
    score?: number;
}

export const DealSchema = SchemaFactory.createForClass(Deal);
DealSchema.index({ 'redemptionLocations.location': '2dsphere' });
