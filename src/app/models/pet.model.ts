export class Pet {
    name: string;    
    price: number;
    gene: string;
    age: number;
    breed: string;
    color: string;
    vaccinated: boolean;
    dewormed: boolean; 
    cert: boolean;
    microchip: boolean;
    location: string

    constructor(name: string, gene: string, age: number, price: number, breed: string, color: string, vaccinated: boolean, dewormed: boolean, cert: boolean, microchip: boolean, location: string) {
        this.name = name;       
        this.price = price;
        this.gene = gene;
        this.age = age;
        this.breed = breed; 
        this.color = color; 
        this.vaccinated = vaccinated;
        this.dewormed = dewormed;
        this.cert = cert;
        this.microchip = microchip;
        this.location = location
    } 
}