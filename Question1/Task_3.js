//Question 3
//check for young customer, the out put will be true of false, 
//true if any customer found with age < 10 else it should be false

let youngCustomeDetails=customers.some((youngCustomer=> youngCustomer.age<10));
console.log(youngCustomeDetails);