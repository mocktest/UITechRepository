import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable()
export class javaService {
    constructor(private _http: HttpClient) {

    }
    public getRestCall(): any {
        return this._http.get("http://localhost:2017/WalletApp/rest/paytm/balance?mobile=9855");
    }
}