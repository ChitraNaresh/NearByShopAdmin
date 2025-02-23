import React from 'react'
import "./discountProduct.scss"

const DiscountProduct = () => {
  return (
    <div className='discount-product'>
      <div className="product-pic"></div>
      <div className="product-details">
        <p className='product-name'>Marshal</p>
        <p className="product-location">LB Nagar, Hyd...</p>
        <p className='discount'>35% Discount</p>
        <p className='alert-message'>Limited stock</p>
      </div>
    </div>
  )
}

export default DiscountProduct