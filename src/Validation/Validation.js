function creationvalidation(data) {
    let todayDate = new Date().toISOString().slice(0,10);
    if(data.CreationDate !== todayDate || data.CreationDate === null){
        return true
    }
    else{
        return false;
    }
  }

  function expirationvalidation(data){
    let todayDate = new Date().toISOString().slice(0,10);
    if(data.ExpiryDate !== todayDate || data.ExpiryDate === null){return true}
    else{return false;}
  }
  
  function ValidateCodeLength(data){
        //check decimal no /check if its a number/ check if value is defaulted to 0 becos of regex 
        //which by default return 0
        const re = /^[+]?([0-9]+(?:[\.][0-9]*)?|\.[0-9]+)$/;
        const test = re.test(data.CodeLength);
        if(!test || (data.CodeLength % 1 != 0) || (data.CodeLength === 0) || (data.CodeLength > 15) || (data.CodeLength < 4)){return true;}
        else {return false}
  }

  export { creationvalidation, expirationvalidation ,ValidateCodeLength };
