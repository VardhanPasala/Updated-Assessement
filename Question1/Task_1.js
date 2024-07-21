//what items senior citizens have purchased >60

let seniorCitizen =  customers.filter(customer => customer.age > 60);

seniorCitizen.forEach(customer => {
    console.log(customer.f_name + " " + customer.l_name +" has purchased " + customer.purchased);
});