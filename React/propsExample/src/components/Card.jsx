let Card =  (props)=>{
    console.log(props)
    let {product,price,rating} = props
    return(
        <div className="card">
            <h1>Product Name: {product}</h1>
            <h2>Price: {price}</h2>
            <h3>Rating: {rating}</h3>
        </div>
    )
}
export default Card;