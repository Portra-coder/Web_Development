
let card = (props)=>{
    console.log(props)
    return(
        <div>
             <h3> ename is : {props.ename}</h3>
              <h4> eid is : {props.eid}</h4>
              <h4> sal is : {props.sal}</h4>
        </div>
    )
}
export default card;