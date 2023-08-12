import React from 'react';
import Product from './Product.js'
// rfc react functional component that gives whole function
export default function ProductList(props) { //we cant change props
    
  return (
    props.productList.map((product,i)=>{
        return <Product product={product} key={i} incrementQuantity={props.incrementQuantity} index={i} decrementQuantity={props.decrementQuantity}/>
    })
  )
}
