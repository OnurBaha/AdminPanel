export class IProduct  {
    productId: number;
    productName: string;
    shortName: string;
    category: string;
    sku: any;
    price: string;
    thumbnailImageUrl: string;
    deliveryTimeSpan: string;

    constructor() {
        this.category =  '';
        this.price = '';
        this.deliveryTimeSpan= '';
        this.productId= 0;
        this.productName= '';
        this.shortName= '';
        this.sku = '';
        this.thumbnailImageUrl= '';

    }
  }
  