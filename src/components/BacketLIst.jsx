import { BacketItem } from "./BacketItem";

function BacketList(props) {
  const { ordered = [], handleShow= Function.prototype,deleteItem =Function.prototype,addQuantity= Function.prototype,lessQuantity=Function.prototype} = props;

  const basketItems = ordered.map((item) => (
    <BacketItem key={item.id} {...item} deleteItem={deleteItem} addQuantity={addQuantity} lessQuantity={lessQuantity}/>
  ));

  const totalCost = ordered.reduce((acc, item) => acc + item.price*item.quantity, 0);

  return ( 
    <ul className="collection basket">
      <li className="collection-item">Basket</li>
      {ordered.length ? basketItems : <h4>Basket is empty</h4>}
      <li className="collection-item">Total price: {totalCost}</li>
      <i className="material-icons close-basket" onClick={()=>handleShow()}>close</i>
    </ul>
  );
}

export { BacketList };