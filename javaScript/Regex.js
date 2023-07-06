// var input = "renuka";
// regex = /^[A-Z]/;
// var condtion= regex.test(input);
// if(condtion== true){
//     console.log("yes");
// }
// else{
//     console.log("No");
// }




// var credit_card = "378282246310006";
// regex = /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/;
// var condtion= regex.test(credit_card);
// if(condtion== true){
//     console.log("yes");
// }
// else{
//     console.log("No");
// }




// var email = "pasam@experience.com";
// regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// var condtion= regex.test(email);
// if(condtion== true){
//     console.log("yes");
// }
// else{
//     console.log("No");
// }




var date = "31/01/2015";
regex =/^(1[0-2]|0?[1-9])\/(3[01]|[12][0-9]|0?[1-9])\/(?:[0-9]{2})?[0-9]{2}$/ ;
var condtion= regex.test(date);
if(condtion== true){
    console.log("yes");
}
else{
    console.log("No");
}