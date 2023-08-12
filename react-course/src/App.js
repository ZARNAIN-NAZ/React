import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import React, { useState } from "react";
import Footer from './components/Footer.js'

function App() {
var productList =[
    {
      price:99999,
      name:"IPhone 10S Max",
      quantity:0,
    },
    {
      price:9999,
      name:"Redmi Note 10S Max",
      quantity:0,
    },
  ]
 var [productList, setProductList] = useState(productList);
 var [totalAmount, setTotalAmount] = useState(0);

  const incrementQuantity=(index)=>{
   let newProductList =  [...productList]
    let newTotalAmount = totalAmount
   newProductList[index].quantity++
   totalAmount+= newProductList[index].price
   setTotalAmount(newTotalAmount)
   setProductList(newProductList)
  }

  const decrementQuantity=(index)=>{
    let newProductList =  [...productList]
    let newTotalAmount = totalAmount
    if(newProductList[index].quantity >0)
    {
       newProductList[index].quantity-- 
       newTotalAmount -= newProductList[index].price
      }
      setTotalAmount(newTotalAmount)
    setProductList(newProductList)
   }
  return (
<>
   <Navbar/>
   <main className='container mt-5'> <ProductList productList = {productList} incrementQuantity={incrementQuantity}  decrementQuantity={decrementQuantity}/>
   </main>
    
     <Footer totalAmount={totalAmount}/>
    </>
  );
}


export default App;
