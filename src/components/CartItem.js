import React from 'react'

export const CartItem = ({cartItemName, cartItemPrice}) => {
    return (
        <div>
            <span>{cartItemName} - {cartItemPrice}€</span>
        </div>
    )
}
