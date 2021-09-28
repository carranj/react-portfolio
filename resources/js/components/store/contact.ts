import { api } from '../../api';
import { State } from "./state";




class ContactState {
    
    constructor(){}

    async ContactSubmit(data:object) {
        try{
            await api.post('contact-submit', {data});

            return Promise.resolve();
            
        } catch(e){
            return Promise.reject(e);
        }
    }
}

export const contactState = new ContactState();