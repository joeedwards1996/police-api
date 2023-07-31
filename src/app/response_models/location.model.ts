export class Location {

    latitude: number;
    street: {id:string; name:string};
    longitude: number;

    constructor(lattitude:number, street:{id: string; name:string}, longitude: number){
        this.latitude = lattitude;
        this.street = street;
        this.longitude = longitude;
    }


}