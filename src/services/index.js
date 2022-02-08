import FormData from 'form-data';

export const API_BASE_URL = process.env.API_BASE_URL || "http://localhost:5000";


export const createMultiForm = (object, keyOfFile='image') => {
    const formData = new FormData()
    const keys = Object.keys(object)
    keys.forEach((key)=>{  
        if (key===keyOfFile && object[keyOfFile]){
            formData.append(key, object[key][0])
        } 
        else{
            formData.append(key, object[key] )
        }
    })
    return formData
}
