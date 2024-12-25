import React from 'react'
import cart from './assets/cart.svg'
import './CartWidget.css'

const CartWidget = () => {
    return(
        <div>
            <img src={cart} alt="cart-widget" className="cart-icon"/>
            0
        </div>
    )
}

export default CartWidget