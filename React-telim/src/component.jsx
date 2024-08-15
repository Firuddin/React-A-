function Component(props) {
    console.log(props);
    
    return(
        <div>
            <p>{props.productName}</p>
            <p>{props.price}</p>
        </div>
    )
}
export default Component