// Add answers here 

//1 

function nameOfCity(str) {
    lowerCaseStr = str.toLowerCase()
    
   if (lowerCaseStr.substring (0,3) == 'los' || lowerCaseStr.substring(0,3) == 'new') {
    return str; 
   } else
   {return "The city name does not begin with Los or New";}

   }

nameOfCity('New York') 
nameOfCity('newark') 
nameOfCity('London') 


//2
function isDivisible(int) {
    if (int % 100 == 0 ){
        return true;
    }
    else  {return false;}

}
isDivisible(1) 
isDivisible(1000) 
isDivisible(100) 

//4

function isRaining (rain) {
    return (rain? 'wet day - you need an umbrella' : 'dry day - leave your umbrella at home')
}

isRaining(true)


// Loops
//1 
function geometricalSequence(m) { 
    for(let m = 0; m<=8; m++)
{console.log (2 ** m)}
   } 
   geometricalSequence()
 


   //2 
   function multiplesOfThree() {
   for(let k = 1; k<=15; k++){ 
    if(k % 3 == 0){ 
        console.log(k) 
    } 
   } 
   }

   //Math 
   // 1
   function powerOf (x) {
    console.log (Math.pow(x,x));
   }

   powerOf (3);
   powerOf (4);


   //Problem solving 



function vowelCount(str) {
    let count = 0; 
    let vowels = ['A', 'a', 'E', 'e', 'I', 'i', 'O', 'o', 'U', 'u'];

        if (vowels.includes(str)) {
            count++; 
        }
        {return count;}
    }
   
vowelCount("hello")
vowelCount("test") 
vowelCount("fbw") 

// DO NOT EDIT below this line - This will result in an automatic fail
// module.exports = {nameOfCity, isDivisible, missingAngle, isRaining, geometricalSequence, multiplesOfThree, powerOf, vowelCount};


