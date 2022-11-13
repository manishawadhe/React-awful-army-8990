const getLocalData=key=>{
    if(key){
        const data=localStorage.getItem(key);
        return data
    }
}

const firstNameLocalData=key=>{
    if(key){
        const firstName=localStorage.getItem(key)
        return firstName
    }
}
const saveLocalFirstName=(key,value)=>{
    if(key && value){
        localStorage.setItem(key,value)
    }
}

const saveLocalData=(key,value)=>{
    if(key && value){
        localStorage.setItem(key,value)
    }
}


export {getLocalData,saveLocalData,firstNameLocalData,saveLocalFirstName}