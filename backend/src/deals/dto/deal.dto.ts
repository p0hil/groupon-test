import { IsNumber, IsObject, IsOptional, IsString, ValidateNested } from 'class-validator';
import { Expose, Transform, Type } from 'class-transformer';

export class LocationDto {
    @IsString()
    @IsOptional()
    id?: string;

    @IsNumber()
    lat: number;

    @IsNumber()
    lng: number;

    @IsString()
    @IsOptional()
    address?: string;

    @IsString()
    @IsOptional()
    city: string;

    @IsString()
    @IsOptional()
    state: string;

    @IsString()
    @IsOptional()
    zipCode: string;
}

export class DealDto {
    @Expose()
    @Transform(({ obj }) => (obj.id ?? obj._id)?.toString())
    id: string;

    title: string;
    description: string;
    originalPrice: number;
    discountPrice: number;
    discountPercentage: number;
    category: string;
    subcategory: string;
    tags: string[];
    location: LocationDto;
    merchantName: string;
    merchantRating: number;
    quantitySold: number;
    expiryDate: Date;
    featuredDeal: boolean;
    imageUrl: string;
    redemptionLocations: LocationDto[];
    finePrint?: string;
    reviewCount: number;
    averageRating: number;
    availableQuantity: number;
}

export type SortField = 'discount' | 'price' | 'rating' | 'popularity' | 'expiry' | 'relevance';
export type SortOrder = 'asc' | 'desc';

export class FilterCriteriaDto {
    @IsNumber()
    @IsOptional()
    maxPrice?: number;

    @IsNumber()
    @IsOptional()
    minDiscount?: number;

    @IsString()
    @IsOptional()
    category?: string;

    @IsString()
    @IsOptional()
    subcategory?: string;

    @IsString({ each: true })
    @IsOptional()
    tags?: string[];

    @ValidateNested()
    @Type(() => LocationDto)
    @IsOptional()
    location?: LocationDto;

    @IsNumber()
    @IsOptional()
    radius?: number; // in miles

    @IsNumber()
    @IsOptional()
    merchantRating?: number;

    @IsString()
    @IsOptional()
    sortBy?: SortField;

    @IsString()
    @IsOptional()
    sortOrder?: SortOrder;
}


export class DealsFeedDto {
    @IsNumber()
    @IsOptional()
    offset?: number;

    @IsNumber()
    @IsOptional()
    limit?: number;

    @Type(() => FilterCriteriaDto)
    @IsObject()
    @ValidateNested()
    filter: FilterCriteriaDto;
}
