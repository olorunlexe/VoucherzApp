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

  //object to csv
  function objectToCsv(data){
      const csvRows = [];
      //get the headers for csv
      const headersTitle = Object.keys(data[0]);
      csvRows.push(headersTitle.join(','));
      //Loop over the rows
      for (const row of data){
          const values = headersTitle.map(header =>{
              const escaped = ('' + row[header]).replace(/"/g, '\\"');
              return `"${escaped}"`;
          })
          csvRows.push(values.join(','))
      }
      return csvRows.join('\n')
  }

  function download(data){
      const blob = new Blob([data],{type: 'text/csv'});
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.setAttribute('hidden','');
      a.setAttribute('href', url);
      a.setAttribute('download', 'VoucherizeInterswitch.csv');
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
  }

  export { creationvalidation, expirationvalidation ,ValidateCodeLength,objectToCsv,download };
