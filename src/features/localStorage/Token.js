export function saveToken  (Token)  {
    localStorage.setItem('Token', token);
    const token = localStorage.getItem('Token');
    return token

}
export function loadToken  ()  {
   const token = localStorage.getItem('Token');
    if(token){

    }else{
        console.error('token doesnt exist')
    }
}
export function deleteToken ()  {
   const token = localStorage.removeItem('Token');
    if(!token){
        return ('token removed successfully')
    }else{
        console.error('token doesnt delete')
    }
}