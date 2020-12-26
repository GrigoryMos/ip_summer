import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {DataBaseService} from "../../services/data-base/data-base.service";
import {Product} from "../../models/product/product";

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {

  form: FormGroup;
  constructor(private dataBaseService: DataBaseService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      image: new FormControl(null, [Validators.required]),
      price: new FormControl(null, [Validators.required])
    });
  }

  createProduct() {
    (async () => {
      const newProduct = new Product(null);
      newProduct.name = this.form.value.name;
      newProduct.image = this.form.value.image;
      newProduct.price = this.form.value.price;
      const products = await this.dataBaseService.getProduct();
      if (this.form.invalid) {
        alert('Введены не все данные');
        return;
      }
      else {
        newProduct.id = products[products.length - 1].id + 1;
        await this.dataBaseService.createProducts(newProduct);
        alert('Товар успешно создан');
        window.location.reload();
      }
    })();
  }

}
