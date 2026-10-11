

(function()
{
    console.log("I am iife")
})();



(
    function(port)
    {
        console.log("server is running on port number ",port)
    }
)(3000);


// Arrow function without storing in a variable 
setTimeout(()=>{console.log("hello")},5000) // Hello execute after 5 seconds