// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
    return "hereismypassword"
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}

var lowerCase ="a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z";
var capitalCase = "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z";
var specialChar = "!,#,$,%,&,',(,),*,+,,,-,.,/,:,;,<,=,>,?,@,[,\,],^,_,`,{,|,},~";
var numbers = "1,2,3,4,5,6,7,8,9,0";
var charTotal;

var splitCapitalCase = (capitalCase.split, ",");
var splitLowerCase = (lowerCase.split, ",");
var splitSpecialChar = (specialChar.split, ",");
var splitNumbers = (numbers.split, ",");

        //-------while loop keeps characters between 8-128-------//


        alert ("To begin, let's set some parameters for your password")
        while (true) {
        charTotal = prompt("How long would you like your password", "");
        if (charTotal >= 8 && charTotal <= 128) 
            break;
        }
        alert("It should be between 8 and 128 charcters in length");
    // }                 //------------------end loop---------------------//


    alert("Now lets choose its contents");
         
                 //---------------Capital Case prompt-------------//
    var hasCapitals = confirm ("Would you like  to include CAPTIAL CASE letters");




    if (hasCapitals) {
         passwordCapital = splitCapitalCase[Math.floor(Math.random()* charTotal)];
    }

                 //---------------Lower Case prompt-------------//
    var hasLower = confirm("Would you like to include lower case letters")
        if (hasLower) {passwordlower = splitLowerCase[Math.floor(Math.random()* charTotal)];
           
        }

                //---------------Special Characters prompt------------------//
    var hasSpecial = confirm("would you like to include special characters")
        if (hasSpecial) { passwordSpecial = splitSpecialChar[Math.floor(Math.random()* charTotal)];
            
        }

                    //---------------Numbers prompt-------------//
    var hasNumbers = confirm("would you like to include numbers");
        if (hasNumbers) { passwordNumbers = splitNumbers[Math.floor(Math.random()* charTotal)];
       
        }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
