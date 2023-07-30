export class Availability{


    public date: string; 
    public stop_and_search: string[];


    constructor(date: string, stop_and_search: string[]){
        this.date = date;
        this.stop_and_search = stop_and_search;
    }


}