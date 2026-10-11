let fetchedData = fetch("https://fakestoreapi.com/products/");
console.log(fetchedData); //Promise

fetchedData.then((data) => {
  console.log(data); //response

  let jsondata = data.json();
  console.log(jsondata); //promise

  jsondata.then((data) => {
      console.log(data); // original data
    })
    .catch((err) => {
      console.log(err);
    });
})
.catch((err) => {
      console.log(err);
});





let getProducts=async()=>{
try{
 let res=await fetch("https://fakestoreapi.com/products/")
    console.log(res);
    let j=await res.json()
    console.log(j);
}
catch{
    console.log(err);
    }    
}
getProducts()

