import { getAxiosInstance } from "./axios-instance";


export type SWAPIEndpoint = 'people' | 'films' | 'starships' | 'vehicles' | 'species' | 'planets';

const meuController = genericControler('films');

export const genericControler = (endpoint: SWAPIEndpoint) => {
    const axios = getAxiosInstance();


    const getSchema = async () => {

        const response = await axios.get(`/${endpoint}/schema`);

        return response.data;
    }    
}