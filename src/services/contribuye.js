import { API_BASE_URL } from './index';
import axios from 'axios';

export async function postDonate({
    paymentMethodId,
    issuerId,
    cardholderEmail,
    amount,
    token,
    installments,
    identificationNumber,
    identificationType,
}) {
  
    try{
        return await axios
        .post(`${API_BASE_URL}/api/v1/donate/process-payment`,{
            token,
            issuer_id:issuerId,
            payment_method_id:paymentMethodId,
            transaction_amount: amount,
            installments: 1,
            description: "Donación",
            payer: {
                email:cardholderEmail,
                identification: {
                    type: identificationType,
                    number: identificationNumber,
                },
            },
        })
        
    }catch(err){
        console.error(err)
    }
    
}

export async function getDonate(){
    try{
        return await axios
        .get(`${API_BASE_URL}/api/v1/donate/process-payment/user`)
        
    }catch(err){
        console.error(err)
    }
    
}

export async function getDonatesAll(){
    try{
        return await axios
        .get(`${API_BASE_URL}/api/v1/donate/process-payment/all`)
        
    }catch(err){
        console.error(err)
    }
    
}