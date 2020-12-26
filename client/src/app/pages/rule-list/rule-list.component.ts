import { Component, OnInit } from '@angular/core';
import { DataBaseService } from '../../services/data-base/data-base.service';
import {Product} from "../../models/product/product";

@Component({
  selector: 'app-rule-list',
  templateUrl: './rule-list.component.html',
  styleUrls: ['./rule-list.component.scss']
})
export class RuleListComponent implements OnInit {
  products: Product[] = [];


  constructor(private dataBaseService: DataBaseService) { }

  ngOnInit(): void {
    (async () => {
      const products = await this.dataBaseService.getProduct();
      this.products = products;
    })();
  }

  removeProduct(product: Product) {
    if (confirm('Вы уверены, что хотите удалить товар!!?')) {
      (async () => {
        await this.dataBaseService.deleteProductById(product.id);
        window.location.reload();
      })();
    }
  }

}
