export interface IDish{
    image: any;
    name: string;
    price: number;
    weight: number;
    description: string;
    quantity_sold?: number;
    locality: string | Blob;
    localityId:never;
    ingredients?: [];
    order?: []
    Restaurant:string;
}