import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function UpdateFruit() {

    const [fruitName,setFruitName]=useState("");
    const [quantity,setQuantity]=useState("");
    const [price,setPrice]=useState("");
    const [imageUrl,setimageUrl]=useState("");

    const {id}=useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get(`http://localhost:3000/fruits/${id}`)
        .then((response)=>{
            setFruitName(response.data.name);
            setQuantity(response.data.quantity);
            setPrice(response.data.price)
            setimageUrl(response.data.imageUrl)
        })
        
    },[]);

    const handleSubmit =()=>{

        var data={

            name:fruitName,
            quantity:quantity,
            price:price
        }
        axios.put(`http://localhost:3000/fruits/${id}`,data)
        .then(navigate('/'))     


    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                Name:<input type="text" value={fruitName} name="fruitname" onChange={(e)=>setFruitName(e.target.value)}/>
               Quantity: <input type="number" value={quantity} name="quantity" onChange={(e)=>setQuantity(e.target.value)}/>
                Price<input type="number" value={price} name="price" onChange={(e)=>setPrice(e.target.value)}/> 
                <input type="submit"/>

            </form>
        </div>
    )
  }
  export default UpdateFruit;