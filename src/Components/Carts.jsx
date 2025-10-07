import React from 'react'
import '../CSS/Carts.css'
import Cart from './Cart'
import { ProductsData } from './ProductsData'

export default function Carts() {
  return (
    <div >
        <h1>Carts</h1>
        <div className='Carts'>
          {
            ProductsData.map((Product)=><Cart ID={Product.ProductID} Name={Product.ProductName} Tag={Product.ProductTag} Price={Product.ProductPrice} />)
          }
        </div>
    </div>
  )
}
