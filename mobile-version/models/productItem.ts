class Product {
    key:string;
    id:string;
    name:string;
    price:number;
    image:string;

    constructor(productKey:string,productId:string,productName:string,productPrice:number,productImage:string){
        this.key=productKey;
        this.id=productId;
        this.name=productName;
        this.price=productPrice;
        this.image=productImage;
    }
}

export default Product;