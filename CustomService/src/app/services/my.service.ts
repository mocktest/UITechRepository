import {Injectable} from "@angular/core";
@Injectable()
export class myService{
    public getMySqlData():string{
        return "Data from mysql soon.."
    }
    public getMongoDbData():string{
        return "Data from MongoDB soon.."
    }
}