import { Component, OnInit} from '@angular/core';

import { ProductService } from 'src/api/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {

  products?: any = [];

  selectedName: string = '';
  selectedDate: Date = new Date();
  selectedWeight: number = 0;
  selectedQuantity: number = 1;
  selectedDateEntry: Date = new Date();
  selectedSupplier: string = '';
  selectedPurchase: string = '';

  showAlert = false;

  constructor(private productSvc:ProductService){}

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(){
    this.productSvc.getAllProducts().then(res =>{
      this.products.push(res);
      console.log(this.products);
    }).catch(err => console.error(err));
  }

  getOrderExpiration(){
    this.productSvc.getAllProductsExpire().then(res =>{
      this.products = [];
      this.products.push(res);
    }).catch(err => console.error(err))
  }

  getOrderQuantities(){
    this.productSvc.getAllProductsQuantities().then(res =>{
      this.products = [];
      this.products.push(res);
    }).catch(err => console.error(err))
  }

  expirationTaken(date:string): number{
      const fechaActual = new Date();
      const fechaVencimiento = new Date(date);
    
      const diferenciaEnMilisegundos = fechaVencimiento.getTime() - fechaActual.getTime();
      const diferenciaEnDias = diferenciaEnMilisegundos / (1000 * 60 * 60 * 24);
    
      if (diferenciaEnDias > 3) {
        return 1;
      } else if (diferenciaEnDias > 0 && diferenciaEnDias <= 3) {
        return 2;
      } else {
        return 3;
      }
  }

  sendProduct(){
    const product = {
      nombre: this.selectedName,
      fechaVencimiento: this.selectedDate,
      pesoUnidad: this.selectedWeight,
      cantidad: this.selectedQuantity,
      fechaEntrada: this.selectedDateEntry,
      proveedor: this.selectedSupplier,
      referenciaCompra: this.selectedPurchase
    }
    this.productSvc.postProduct(product).then(res =>{
      this.showAlert = true;
      this.products = [];
      this.getAllProducts();
    }).catch(err => console.error(err)); 
  }

  deleteProduct(id:string){
    this.productSvc.deleteProduct(id).then(res=>{
      console.log(res);
      this.products = [];
      this.getAllProducts();
    }).catch(err => console.error(err));
  }

}
