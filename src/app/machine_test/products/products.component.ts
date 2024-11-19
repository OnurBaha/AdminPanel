import { Component, ElementRef, inject, OnInit, signal, ViewChild } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { IProduct } from '../../model/product';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  productSrv = inject (ProductService);
  productList = signal<IProduct[]>([]);

  ngOnInit(): void {
    this.loadProducts();
  }


  loadProducts(){
    this.productSrv.getAllProducts().subscribe((res:IProduct[])=>{
      this.productList.set(res)
    })
  }

  @ViewChild("newModal") modal: ElementRef | undefined;


  openModal() {
    if(this.modal){
      this.modal.nativeElement.style.display = 'block';
    }
  }
  closeModal() {
    if(this.modal){
      this.modal.nativeElement.style.display = 'none';
    }
  }
}
