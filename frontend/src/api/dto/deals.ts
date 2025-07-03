export class Location {
    id: string;
    lat: number;
    lng: number;
    address?: string;
    city: string;
    state: string;
    zipCode: string;
}

export class Deal {
    id: string;
    title: string;
    description: string;
    originalPrice: number;
    discountPrice: number;
    discountPercentage: number;
    category: string;
    subcategory: string;
    tags: string[];
    location: Location;
    merchantName: string;
    merchantRating: number;
    quantitySold: number;
    expiryDate: Date;
    featuredDeal: boolean;
    imageUrl: string;
    redemptionLocations: Location[];
    finePrint?: string;
    reviewCount: number;
    averageRating: number;
    availableQuantity: number;
}

export type SortField = 'discount' | 'price' | 'rating' | 'popularity' | 'expiry' | 'relevance';
export type SortOrder = 'asc' | 'desc';

export class FilterCriteria {
    maxPrice?: number;
    minDiscount?: number;
    category?: string;
    subcategory?: string;
    tags?: string[];
    location?: Location;
    radius?: number; // in miles
    merchantRating?: number;
    sortBy?: SortField;
    sortOrder?: SortOrder;
}

export class DealsFeedDto {
    offset?: number;
    limit?: number;
    filter: FilterCriteria;
}
