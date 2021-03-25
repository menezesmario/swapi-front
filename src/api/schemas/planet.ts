import {GenericSchema} from "./generic-schema";


export interface Planet extends GenericSchema {

    diameter: string;

    climate: string;

    surface_water: string;

    name: string;

    created: string;

    url: string;

    rotation_period: string;

    edited: string;
 
    terrain: string;

    gravity: string;
   
    orbital_period: string;
   
    films: string[];
   
    residents: string[];
   
    population: string;
}
