import { Location } from "../../location.model";


export class StopAndSearchForce{

    public age_range: string;
    public self_defined_ethnicity: string;
    public outcome_linked_to_object_of_search: boolean | null; 
    public datetime: string;
    public removal_of_more_than_outer_clothing: boolean;
    public operation: boolean;
    public officer_defined_ethnicity: string;
    public object_of_search: string;
    public involved_person: boolean; 
    public gender: string; 
    public legislation: string; 
    public location: Location;
    public outcome: boolean | string; 
    public type: string; 
    public operation_name: string | null;


    constructor(age_range:string, 
                self_defined_ethnocity:string,
                outcome_linked_to_object_of_search: boolean | null,
                datetime: string,
                removal_of_more_than_outer_clothing: boolean,
                operation: boolean,
                officer_defined_ethnicity: string,
                object_of_search: string,
                involved_person: boolean,
                gender: string,
                legislation: string,
                location: Location,
                outcome: boolean | string,
                type: string,
                operation_name: string | null

                ){
                    this.age_range = age_range;
                    this.self_defined_ethnicity = self_defined_ethnocity;
                    this.outcome_linked_to_object_of_search = outcome_linked_to_object_of_search;
                    this.datetime = datetime;
                    this.removal_of_more_than_outer_clothing = removal_of_more_than_outer_clothing;
                    this.operation = operation;
                    this.officer_defined_ethnicity = officer_defined_ethnicity;
                    this.object_of_search = object_of_search;
                    this.involved_person = involved_person;
                    this.gender = gender;
                    this.legislation = legislation;
                    this.location = location;
                    this.outcome = outcome;
                    this.type = type;
                    this.operation_name = operation_name


    }

    










}