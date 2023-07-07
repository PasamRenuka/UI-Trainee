var Uname = document.getElementById('User');
// console.log(Uname);
var email = document.getElementById('email1');
var password = document.getElementById('pass');
var con_password = document.getElementById('com-pass');
var Submit = document.getElementById('sub');



Submit.addEventListener('click', function (a) {
        var User_name=Uname.value ;
        U_regex=/(?=.{8,})/;
        if(U_regex.test(User_name)){
            alert("Username is sucessfully entered");
        }
        else{
            Uname.style.cssText  = "border-color:rgb(213, 85, 125);"
            alert("atleast 8 characters required");
           a.preventDefault();
        }
        var Email=email.value;
        E_regex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(E_regex.test(Email)){
            alert("Email is sucessfully entered");
        }
        else{
            email.style.cssText  = "border-color:rgb(213, 85, 125);"
            alert("you entered wrong email");
           a.preventDefault();
        }

})
