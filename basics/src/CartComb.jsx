import CartComponent from "./CartComponent";

function CartComb() {
    let styles = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent : "center",
        alignItems : "center",
        marginLeft: "5px",
        gap : "34px",
        borderRadius: "124px",
      
    }
    return (
        <div style={styles}>
            <CartComponent  Title="Logitech MX Master"  Description="800 DPI "  Discount = "12495  8999 "  Color="red"/>
            <CartComponent   Title="Apple Pencil (2nd Gen)"  Description="Intuitive Touch Surface "  Discount = "11900 9199 " Color="red"/>
            <CartComponent   Title="Zebronics"  Description="Designed for iPad Pro "  Discount = "1599 899 "  Color="red"/>
            <CartComponent    Title="Petronics Toad"  Description="Wireless Mouse 2.4 GHz  "  Discount = "599 278 " Color="red"/>

        </div>
    )
    
}

export default CartComb;