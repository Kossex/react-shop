function Item(props){
const {name,description,images,price,id,handleCart = Function.prototype}=props;

return <div className="card">
    <div className="card-image">
      <img src={`${images.full_background}`} alt='IMG'>
    </img>
    <span className="card-title">{name}</span>
    </div>
    <div className="card-content">
    <p>{description}</p>
    <button className="waves-effect waves-light btn blue buy" onClick={()=>handleCart({name,description,images,price,id})}>Buy</button>
    <p>{price}$</p>
    </div>
  </div>

       
}
export {Item};