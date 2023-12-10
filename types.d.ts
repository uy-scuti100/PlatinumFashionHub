
type ProductType =
    | 'T-Shirts/Polo'
    | 'Trousers'
    | 'Hoodies'
    | 'Denim Jackets'
    | 'Two Piece'
    | 'Shoes'
    | 'Shorts'
    | 'Jewelleries'
    | 'Accessories'
    | 'Gowns'
    | 'Two Piece (Up and Down)'
    | 'Lingerie'
    | 'Bikini'
    | 'Bags';
type AccessoryType = 'Belts' | 'Watches' | 'Ring Light' | 'Press-On-Nails' | 'Others';

type ShoeType = 'Sneakers' | 'Slides' | 'Heels' | 'Sandals' | 'Slippers' | 'Shoes';

type BagSize = 'Small' | 'Medium' | 'Large';

type GenderType = 'Male' | 'Female' | 'Unisex';
export interface Product {
    _id: string;
    name: string;
    gender: GenderType;
    type: ProductType;
    slug: {
        current: string;
    };
    description: string;
    images: {
        alt: string;
        asset: {
            _ref: string;
        };
    }[];
    price: number;
    clotheSize?: string[] | null;
    accessorySize?: string | null;
    shoeSize?: number[] | null;
    bagSize?: BagSize[] | null;
    color?: string[] | null;
    accessoryType?: AccessoryType[] | null;
    shoeType?: ShoeType[] | null;
    isNew: boolean;
    onSale: boolean;
    discountedPrice?: number;

}
