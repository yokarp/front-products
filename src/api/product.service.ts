import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from "@angular/common/http";

import { environment } from "src/environments/environment";


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseurl = environment.localhost;

  constructor(private http: HttpClient) { }

  getAllProducts(): Promise<any>{
    return this.http.get(this.baseurl).toPromise();
  }

  getAllProductsExpire(): Promise<any>{
    return this.http.get(this.baseurl + "/expirations").toPromise();
  }

  getAllProductsQuantities(): Promise<any>{
    return this.http.get(this.baseurl + "/quantities").toPromise();
  }

  postProduct(product:any){
    return this.http.post(this.baseurl, product,).toPromise();
  }

  deleteProduct(id:string){
    return this.http.delete(this.baseurl + "/" + id).toPromise();
  }

}
