import React from 'react'

const Vegetable = ({ name, price, image, choixLegume }) => {
    return (
        /* ajouter un onClick pour ajouter les légumes dans le panier */
        <div className="App-vegetable" onClick={choixLegume}>
            <img src={image} alt="" />
            <span>{name}</span>
            <span>{price} €</span>
        </div>
    )
}

export default Vegetable