let company = {
  companyTitle: "davidson design",
  activity: [
    "data analysis",
    "web development",
    "javascript training",
    {
      abroad: "mobile development",
      charity: "third sector organizations",
      tax: true,
    },
  ],
  address: {
    street: "Hope Terrace",
    town: "Stornoway",
    postcode: "HS1 2PH",
  },
  apprentices: true,
  startDate: 2024,
  brandColors: ["orange", "blue", "white"],
  buildingColor: "blue",
  employees: 4,
};
console.log(company);

// Access an object property one way
let buildingColor1 = company["buildingColor"];
console.log(buildingColor1);

// Access an object property another way
let buildingColor2 = company.buildingColor;
console.log(buildingColor2);

/* update the value of a properties in objects. Hint, remember how to do it with arrays */
company["buildingColor"] = "orange";
console.log(company.buildingColor);

/* Another way of updating the value of properties in objects. Remember the dot! */
company.buildingColor = "red";
console.log(company.buildingColor);

/* We are referring to object properties by literal string values. We can also do this with variables. Assign an object property to a variable, console log the property and then console log the property value. */
let var1 = "startDate";
console.log(var1);
console.log(company[var1]);

/*  change the value of the variable to another company property so we access another property */

var1 = "companyTitle";
console.log(company[var1]);

/* update the value of accessed property with var1 and print to console */
company[var1] = "digital design";
console.log(company["companyTitle"]);

/* objects in objects */

/* modify the the value of the postcode property inside the address object , which in turn is inside the company object. There are two ways to do this */

company.address.postcode = "HS1 3PH";

/* Now change the street value inside the address object. Use the other way to do this (hint: remember square brackets) */

company["address"]["street"] = "faith street";

/* Arrays in objects */

/* Fetch the first color in the brandColors array, hint: assign it to a new variable */

let companyColors = company.brandColors[0];
console.log(companyColors);

/* Objects in arrays and objects in arrays in objects */

let newVar = company.activity[3].abroad;
console.log(newVar);

// Exercise 3.5
