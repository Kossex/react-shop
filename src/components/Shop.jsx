import { useState } from "react";
import { useEffect } from "react";
import { API_KEY, API_URL } from "../config";
import { Items } from "./Items";
import { Preloader } from "./Preloader";
import { Cart } from "./Cart";
import { BacketList } from "./BacketLIst";
import { Alert } from "./Alert";
function Shop () {
const [data,setData] = useState([]);
const [loading,setLoading] = useState(true);
const [ordered,setOrdered] = useState([]);
const [basketShow,setBasketShow] = useState(false);
const [alertName,setAlertName] = useState('');
console.log(ordered);
useEffect(function getItems(){
    // console.log(API_KEY, API_URL );
    fetch(API_URL,{
        headers:{
            'Authorization':API_KEY
        }
    }).then(response=>response.json()).then((response)=>{
        response.items&&setData(response.items);
        setLoading(false)})
},[])
useEffect(function checkPrice(){
    data.map(item=>item.price?(item.price):item.price=Math.round(Math.random()*2000+1))
},[data]) 
const handleCart=(item)=>{
    const itemIndex= ordered.findIndex((orderItem)=> orderItem.id===item.id);
    if(itemIndex<0)
    {
        const newItem = {
            ...item,
            quantity:1,
        };
        setOrdered([...ordered,newItem]);
    }
        else {
            const newOrder = ordered.map((orderItem,index)=>{
                if(index===itemIndex)
                {
                    return{
                        ...orderItem,
                        quantity:orderItem.quantity+1
                    }
                }
                else {
                    return orderItem
                }
            });
            setOrdered(newOrder);
        }
        setAlertName(item.name);
}
function deleteItem(Index){
    const newOrdered= ordered.filter(elem=>elem.id!==Index);
    setOrdered(newOrdered);
 }
const handleShow = ()=>{
    setBasketShow(!basketShow);
}
const addQuantity= (index)=>{
const newOrder=[...ordered];
const indexFound = newOrder.findIndex(item=>item.id===index);
newOrder[indexFound]={...newOrder[indexFound],quantity:newOrder[indexFound].quantity+1}
setOrdered(newOrder);   
};
const lessQuantity= (index)=>{
    const newOrder=[...ordered];
    const indexFound = newOrder.findIndex(item=>item.id===index);
    newOrder[indexFound]={...newOrder[indexFound],quantity:newOrder[indexFound].quantity-1}
    if(newOrder[indexFound].quantity===0){
        deleteItem(index);
    } else{
        setOrdered(newOrder); 
    }
   
    };   
const closeAlert = ()=>{
    setAlertName('');
}
return (
        <main className="container content"> 
            <Cart quantity={ordered.length} handleShow={handleShow} />
            {
                loading?(<Preloader/>):<Items items={data} handleCart={handleCart} />
            }
            {
                basketShow?<BacketList ordered={ordered} handleShow={handleShow} deleteItem={deleteItem} addQuantity={addQuantity} lessQuantity={lessQuantity}/>:<h4> </h4>
                
            }
            {
                alertName&&<Alert closeAlert={closeAlert} name={alertName}/>
            }
            </main>
    )
}
export {Shop};