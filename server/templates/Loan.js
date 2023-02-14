const loanRange = "A1:L1";
const loanTableName = "LoanTable";
const loanHeaders = [
  "name",
  "label.value",
  "type",
  "fieldType",
  "required",
  "default",
  "rules.value",
  "maximum",
  "minimum",
  "enum",
  "enumNames",
  "rules.enumNames",
];

const loanBody = [
  ["firstName", "First Name", "", "text", "TRUE", "", "", "", "", "", "", ""],
  ["lastName", "Last Name", "", "text", "TRUE", "", "", "", "", "", "", ""],
  ["fullName", "Full Name", "", "", "", "", "", "", "", "", "", ""],
  ["company", "Company Name", "", "text", "TRUE", "", "", "", "", "", "", ""],
  ["phone", "Phone", "", "number", "TRUE", "", "", "", "", "", "", ""],
  [
    "loanAmount",
    "How much do you want to borrow?",
    "number",
    "number",
    "TRUE",
    "200000",
    "",
    "3000000",
    "100000",
    "",
    "",
    "",
  ],
  ["term", "What’s your preferred repayment term?", "number", "range", "", "5", "", "20", "1", "", "", ""],
  ["rate", "Rate of interest", "number", "range", "", "8", "", "4", "15", "", "", ""],
  ["'roi", "", "number", "hidden", "", "0.006666667", "=F8/12/100", "", "", "", "", ""],
  ["tenure", "", "number", "hidden", "", "60", "=F7 * 12", "", "", "", "", ""],
  [
    "insuranceOption",
    "Include insurance in your repayment",
    "number",
    "radio-group",
    "",
    "0",
    "",
    "",
    "",
    "800, 0",
    "Add R8 to the loan amount for insurance, I have my own insurance",
    "['Add R' & insuranceAmount & ' to the loan amount for insurance', 'I have my own insurance']",
  ],
  ["insuranceAmount", "", "", "hidden", "", "800", "=(F6 * 0.4)/100", "", "", "", "", ""],
  ["submit", "Submit", "", "button", "", "", "", "", "", "", "", ""],
];