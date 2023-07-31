import { Location } from "../location.model";


class OutcomeStatus{
    public category: string;
    public date: string;

    constructor(category: string, date: string){
        this.category = category;
        this.date = date;
    }
}

export class StreetLevelCrime {


    public category: string; 
    public location_type: string; 
    public location: Location;
    public context: string; 
    public outcome_status: OutcomeStatus;
    public persistent_id: string; 
    public id: string; 
    public location_subtype: string; 
    public month: string; 


    constructor(category: string,
                location_type: string,
                location: Location,
                context: string, 
                outcome_status: OutcomeStatus,
                persistent_id: string, 
                id: string, 
                location_subtype: string, 
                month: string){
                    this.category = category;
                    this.location_type = location_type;
                    this.location = location;
                    this.context = context;
                    this.outcome_status= outcome_status;
                    this.persistent_id = persistent_id;
                    this.id = id;
                    this.location_subtype = location_subtype;
                    this.month = month;
                }

    






}