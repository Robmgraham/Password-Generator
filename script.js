// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}

var capitalCase =("a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z");
var lowerCase = ("A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z");
var specialChar = ("!,#,$,%,&,',(,),*,+,,,-,.,/,:,;,<,=,>,?,@,[,\,],^,_,`,{,|,},~");
var numbers = ("1,2,3,4,5,6,7,8,9,0");
var charTotal;



        //-------while loop keeps characters between 8-128-------//
confirm ("To begin, let's set some parameters for your password")
    while (true) {
    charTotal = prompt("How long would you like your password", "");
    if (charTotal >= 8 && charTotal <= 128) {
        break;
    }
    alert("It should be between 8 and 128 charcters in length");
    }                 //------------------end loop---------------------//


    alert("Now lets choose its contents");
         
                 //---------------Capital Case prompt-------------//
     confirm ("Would you like  to include CAPTIAL CASE letters")
        if (true) {const randomElement = capitalCase[Math.floor(Math.random()* 2)];
           
       } else {
           
       }

                 //---------------Lower Case prompt-------------//
    confirm("Would you like to include lower case letters")
        if (true) {const randomElement = lowerCase[Math.floor(Math.random()* 2)];
           
       } else {
           
       }

                //---------------Special Characters prompt------------------//
    confirm("would you like to include special characters")
        if (true) {const randomElement = specialChar[Math.floor(Math.random()* 2)];
            
        } else {
            
        }

                    //---------------Numbers prompt-------------//
    confirm("would you like to include numbers");
        if (true) {const randomElement = numbers[Math.floor(Math.random()* 2)];
        
        } else {
        
        }
    
    

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
    