import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product: Product

  constructor(
    private router: Router,
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = +this.activatedRoute.snapshot.paramMap.get('id')!;
    this.productService.readbyId(id).subscribe(p => this.product = p);
  }

  deleteProduct(): void {
    this.productService.delete(this.product.id!)
      .subscribe(() => this.productService.showMessage("Produto excluído com sucesso!"));
    this.router.navigate(["/products"]);
  }

  cancel(): void {
    this.router.navigate(["/products"]);
  }

}
