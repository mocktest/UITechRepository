import{Component} from "@angular/core";
import{myService} from "../services/my.service";
@Component({
    selector:"second",
    templateUrl:"./second.component.html"
})
export class secondComponent{
private result:string;
//dependency injection
constructor(private _service:myService){

}
//first life cycle hook
ngOnInit(){
    this.result=this._service.getMongoDbData();
}
}