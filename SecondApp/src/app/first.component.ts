import { Component } from "@angular/core";

@Component({
    selector:"first",
 templateUrl:"./first.component.html"   
})
export class FirstComponent{
    private first_sub:string;
    private second_sub:string;
    private third_sub:string;
constructor(){
    this.first_sub="spring";
    this.second_sub="hibernate";
    this.third_sub="angular";
}
public getFirstSub():string{
return this.first_sub;
}
public getSecondSub():string{
    return this.second_sub;
    }
public getThirdSub():string{
    return this.third_sub;
    }
}