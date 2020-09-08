import React from 'react'
import { CartItem } from './CartItem'

const Cart = ({ panierItems, totalPanier }) => {

    let detailPanier = panierItems.map((item) => {

        return (
            <CartItem // le component CartItem permet juste de recueillir le nom et le prix d'un item
                key={`${item.id}-${Math.random()}`}
                cartItemName={item.name}
                cartItemPrice={item.price}
            />
        )
    })


    return (
        <div>
            {/* liste des éléments Nom: Prix € */}
            <div>
                {/* injection du resultat 'detailPanier' du .map dans le return du composant stateless */}
                {detailPanier}
            </div>

            {/* total du  panier */}
            <div className="App-cart-total">
                {/* total récupéré via une props dans le composant Cart appelé dans le return de App.js */}
                Soit un total de {totalPanier}€
            </div>

        </div>
    )
}

export default Cart
