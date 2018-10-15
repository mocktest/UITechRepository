//import component
import {Component} from "@angular/core";
import { myService } from "../services/my.service";
//import service
//import{myService} from "../services/my.service";
@Component({
selector:"first",
templateUrl:"./first.component.html"
})
export class firstComponent{
private result:string;
constructor(private _service:myService){
   
}
ngOnInit(){
    this.result=this._service.getMySqlData();
}
}