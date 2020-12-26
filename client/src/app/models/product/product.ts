
export class Product {
  id: number;
  image: string;
  name: string;
  price: number;

  constructor(json) {
    if (!json) {
      return;
    }
    this.id = json.id;
    this.image = json.image;
    this.name = json.name;
    this.price = json.price;
  }

  public toJSON() {
    return JSON.stringify({
      id: this.id,
      image: this.image,
      name: this.name,
      price: this.price,
    });
  }
}
