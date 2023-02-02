let createForm = async () => {
  let ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getActiveSheet();
  sheet.appendRow(headers);
  for ( let tableRow of body) {
    sheet.appendRow(tableRow);
  }
  sheet.setFrozenRows(1);
  sheet.setFrozenColumns(1);
};


let validateForm = async () => {
    let jsonData = getExcelJson();   
    console.log(jsonData);
    let result = convertToAF(jsonData);
    // console.log("Errors ", result?.errors);
    // var select = document.getElementById("errors");
    // select.options.length = 0;
    // result?.errors?.forEach((error) => {
    //   let option = document.createElement("option");
    //   option.text = option.value = error.rule;
    //   option.title = error.error;
    //   select.options[select.options.length] = option;
    // }); 
};