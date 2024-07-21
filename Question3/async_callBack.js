'use strict'
//Asych callback 
  //create a function 
  //function fetchData(url, callback) 
  //add a condition
   //const error = Math.random() > 0.5
// should be asynchronous use setTimeout check if above error value is true then call the callback with message argument as error,url else send the argument as success,url
// the callback function will have message and url as argument, 
  //if error is null then print error occured {message} {url}
    // else print the response is successfull the url is {url} and message is {message}

function fetchData(url, callback){
    const error = Math.random() > 0.5;
    console.log(error);
    setTimeout(() => { 
        error ? callback(`error`, url) : callback(`success`, url);}, 1000);
}

function handleCallback(message, url){
    message === 'error' ? console.log(`Error occured: ${message} ${url}`) : console.log(`Response is successful. The URL is ${url} and message is ${message}`);
}

const url = 'https://google.com';
fetchData(url,handleCallback);

// Another Method
