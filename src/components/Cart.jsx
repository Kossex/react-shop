function Cart (props){
    const {quantity = 0,handleShow = Function.prototype}  = props;
    return <div className="cart" onClick={()=> handleShow()
    }> 
        <i className="material-icons">shopping_cart</i>
        {quantity?(<span className="cart-quantity">{quantity}</span>):null}
        </div>
   
}
export {Cart};