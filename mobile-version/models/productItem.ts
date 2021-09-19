class Product {
    id:string;
    name:string;
    price:number;
    image:string;

    constructor(productId:string,productName:string,productPrice:number,productImage:string){
        this.id=productId;
        this.name=productName;
        this.price=productPrice;
        this.image=productImage;
    }
}

export default Product;