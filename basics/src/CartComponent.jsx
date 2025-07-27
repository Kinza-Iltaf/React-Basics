import "./CartComponent.css"
function CartComponent({Title,Description,Discount, Color}) {
    return (
        <div className="CartComponent">
            <h3>{Title}</h3>
            <p>{Description}</p>
            <p style={{backgroundColor:Color}}>{Discount}</p>
        </div>
    )
}

export default CartComponent;