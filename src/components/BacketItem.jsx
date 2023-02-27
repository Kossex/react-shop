function BacketItem(props){
    const {id,name,price,quantity,deleteItem=Function.prototype,addQuantity=Function.prototype,lessQuantity=Function.prototype} = props;
    return  <li className="collection-item"><div>{name} x{quantity} = {price*quantity} <i className="material-icons tiny add" onClick={()=>addQuantity(id)}>add</i><i className="material-icons tiny add" onClick={()=>lessQuantity(id)}>remove</i><a href="#!" className="secondary-content"><i className="material-icons" onClick={()=>deleteItem(id)}>clear</i></a></div></li>
}
export {BacketItem}
