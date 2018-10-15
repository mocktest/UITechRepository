import { Component } from '@angular/core';
import { javaService } from '../services/java.service';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
    selector: "java",
    templateUrl: "./java.component.html"
})
export class javaComponent {
    private result: any;
    private javaSubscribe: any;
    constructor(private _service: javaService) {
    }
    ngOnInit() {
        this.javaSubscribe = this._service.
            getRestCall().subscribe(this._successCallBack, this._erroCallBack);
    }
    public _successCallBack = (res): any => {
        this.result = res;
    }
    public _erroCallBack = (err: HttpErrorResponse): any => {
        if (err.error instanceof Error) {
            console.log("Client side error...");
        }
        else {
            console.log("server side error...");
        }
    }
    ngOnDestroy(){
        this.javaSubscribe.unsubscribe();
    }
}