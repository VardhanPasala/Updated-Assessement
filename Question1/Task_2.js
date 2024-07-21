//Question 2
 //add full_name to existing list where married Female its Mrs,
 // unmarried female its Ms., for all male its Mr.
//example : 
//'full_name': Ms.Maria Gomes

customers.forEach(customer=>{
    let title;

    if (customer.gender ==='M' ){
        title= 'Mr.';
    }
     else if(customer.gender === 'F'){
        if(customer.married === true){
            title= 'Mrs.';
        } else{
            title='Ms.';
        }
     }

     console.log(`${title} ${customer.f_name} ${customer.l_name}`);
})

// another Way

let entier_name;
customers.forEach(customer => {
if(customer.gender === "F") {
   entier_name = customer.married === false ? 'Ms. ' : 'Mrs. ';
} else {
   entier_name = 'Mr. ';
}
customer["fullName"] = entier_name + customer.f_name + customer.l_name;
});

customers.forEach(customer => {
   let obj = Object.values(customer)
   console.log(obj);
})