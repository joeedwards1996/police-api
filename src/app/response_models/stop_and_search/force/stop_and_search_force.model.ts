class Location {

    latitude: string;
    street: {id:string; name:string};
    longitude: string;

    constructor(lattitude:string, street:{id: string; name:string}, longitude: string){
        this.latitude = lattitude;
        this.street = street;
        this.longitude = longitude;
    }


}

export class StopAndSearchForce{

    public age_range: string;
    public self_defined_ethnicity: string;
    public outcome_linked_to_object_of_search: boolean;
    public datetime: string;
    public removal_of_more_than_outer_clothing: boolean;
    public operation: boolean;
    public officer_defined_ethnicity: string;
    public object_of_search: string;
    public involved_person: boolean; 
    public gender: string; 
    public legislation: string; 
    public location: Location;









}