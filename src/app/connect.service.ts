import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Product} from './product';

@Injectable({
  providedIn: 'root'
})
export class ConnectService {

    private _addurl ="http://localhost:3000/api/addProduct";
    private _viewurl="http://localhost:3000/api/viewProducts";

    constructor(private http : HttpClient) { }

    addProduct(prodInfo:Product)
    {
        return this.http.post<Product>(this._addurl , prodInfo);
    }

    viewProducts()
    {
        return this.http.get<any>(this._viewurl)
    }

}
