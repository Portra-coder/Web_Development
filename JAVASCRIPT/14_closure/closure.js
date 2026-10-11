
let outer = ()=>{
    let a = 20 ;       //step-1 variable created

    let inner =()=>{
        a = a + 1 ; 
        console.log(a);
        }
    return inner      //step-2  return inner function(yet not executed)
}

let ans = outer();    //step-3  ans = stores inner function

ans();  //21          //step-4   ans is called  now, only inner function is getting executed.
ans();  //22
ans();  //23
ans();  //24
ans();  //25

console.log("---------------------------------")

// ! Function Currying 

function multiply(a,b,c)
{
    return a * b * c ; 
}

let ans2 = multiply(1,2,3);
console.log(ans2)


function add(a)
{
   return function(b)
   {
     return function(c)
     {
        return a + b + c ;
     }
   }
}                                           //Instead of storing the returned function in sum:
                                            // let sum = add(1);  --> return function(b)
let sum = add(1)(2)(3)                      // sum(2);  --> call function(b)
                                            // we can directly call it:
                                            // add(1)(2);


// ! function currying with arrow function 


let add2 = a=> 
              b=>
                c => a + b + c ;

console.log(add2(10)(20)(30))
        
    
