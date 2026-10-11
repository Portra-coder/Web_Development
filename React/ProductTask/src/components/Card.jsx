const Card = (props) =>{
    let{title,price,rating,link} = props
    return(
        <div className="productcard">
            <img src={link} alt="" />
            <h2>{title}</h2>
            <h3>Price: {price} rs/-</h3>
            <h4>Rating: {rating} ⭐</h4>
        </div>
    )
}
export default Card;