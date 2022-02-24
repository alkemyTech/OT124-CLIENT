import FormData from 'form-data';

export const API_BASE_URL = process.env.API_BASE_URL || "http://localhost:5000";

export const API_CLIENT_ID = process.env.API_CLIENT_ID || "871300589314-rfonpaai5ogdgqpbhgf2pvtfn1gtkh30.apps.googleusercontent.com"


export const createMultiForm = (object, keyOfFile='image') => {
    const formData = new FormData()
    const keys = Object.keys(object)
    console.log(keys)
    keys.forEach((key)=>{  
        if (key===keyOfFile && object[keyOfFile]){
            formData.append(key, object[key].length ? object[key][0] : object[key])
        } 
        else{
            formData.append(key, object[key] )
        }
    })
    return formData
}
