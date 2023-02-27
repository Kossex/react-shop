import { Item } from "./Item";
function Items (props){
const {items=[], handleCart = Function.prototype} = props;
if(items&&items.length>25)
{
    let goods = items.slice(0,25);

return(
    <div className="items">
        {
            items.length?(goods.map((item)=>
            
            <Item key={item.id} {...item} handleCart={handleCart}/>)):
            <h4>Error</h4>
        }
    </div>

)
} else
    {
        return(
            <div className="items">
                {
                    items.length?(items.map((item)=>
                    
                    <Item key={item.id} {...item} handleCart={handleCart}/>)):
                    <h4>Error</h4>
                }
            </div>
        
        )
    }
}
export {Items}