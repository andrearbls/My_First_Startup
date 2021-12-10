
$(document).ready(function(){
    $("#submit-btn").click(function () {
        var a,b,c,d,e,f;
        var passwordValue,age;
        var firstnameerr=""; var lastnameerr=""; var passworderr="";
         var confirmpassworderr=""; var usernameerr=""; var ageerr="";
         $("#fnameerror").empty(); 
         $("#lnameerror").empty(); 
         $("#passworderror").empty(); 
         $("#confpassworderror").empty(); 
         $("#usernameerror").empty(); 
         $("#ageerror").empty(); 
      var valuee = $("#fname").val();
      var fnameRegex = /\b[A-Z][a-z]*([A-Z][a-z])?\b/; 
  
      if (fnameRegex.test(valuee)) {
           a=1;
      }
      else{
          firstnameerr= "ERROR>>Kindly Enter a valid first name with capital first letter.";
         $("#fnameerror").append(firstnameerr);
        
           a=0;
      }
      var valuee = $("#lname").val();
      var lnameRegex = /\b[A-Z][a-z]*([A-Z][a-z])?\b/; 
  
      if (lnameRegex.test(valuee)) {
           b=1
      }
      else{
        lastnameerr= "ERROR>>Kindly Enter a valid last name with capital first letter.";
        $("#lnameerror").append(lastnameerr);
             b=0;
      }
      var valuee = $("#password").val();
            passwordValue=valuee;
        var passwordRegex = /^(([A-z][a-z])?).*(?=.*\d)(?=.*[A-Z]).{6,}/; 
  
      if (passwordRegex.test(valuee)) {
           c=1
      }
      else{
        passworderr= "ERROR>>Kindly enter at least 6 characters long, must start with an alphabet, must have at least 1 digit and 1 uppercase.";
        $("#passworderror").append(passworderr);     
        c=0;
      }
      var valuee = $("#conf-password").val();
      if (valuee==passwordValue){
        d=1
      }
      else{
        confirmpassworderr= "ERROR>>Password not matched, Kindly enter the same password.";
        $("#confpassworderror").append(confirmpassworderr);   
        d=0;
    }
    var valuee = $("#username").val();
      var usernameRegex = /^(([A-z][a-z])?).*(([0-9])?).{6,}/; 
  
      if (usernameRegex.test(valuee)) {
           e=1
      }
      else{
        usernameerr= "ERROR>>Kindly Enter a valid username must start with an alphabet, must have at least 6 characters.";
        $("#usernameerror").append(usernameerr);     
        f=0;
      }
      var valuee = $("#age").val();
       age = valuee;
  
      if (age>=18 && age<=60) {
           f=1
      }
      else{
        ageerr= "ERROR>>Kindly enter valid age must be in between 18-60.";
        $("#ageerror").append(ageerr);     
        f=0;
      }
      if ( a==1 && b==1 && c==1 && d==1 && e==1 && f==1)
      {
        alert("Information submitted successfully!");
        $('#validation').attr('action', 'https://httpbin.org/post');
        $('#validation').attr('method', 'POST');
      } 

    });
  });