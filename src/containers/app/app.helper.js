//to check whethere formvalues are valid
const isValid = (formValues, key) => {
    if(formValues[key]){  //for different input types, need to have Validator functions map
        return true;
    }
    return false;
}

// Function to check the form errors
export const errorCheck = (formValues, keys) => {
   return isEmpty(formValues) ?  ({title: 'error', description: 'error'}) :
        keys.reduce((acc,key)=>{
        const valid =isValid(formValues, key);
        if(!valid) 
        {
            return {...acc, [key]: "error"}
        }
        return acc;
    },{})
}

//Functions to check empty object
export const isEmpty = (obj) => {
   return Object.entries(obj).length === 0 && obj.constructor === Object
}