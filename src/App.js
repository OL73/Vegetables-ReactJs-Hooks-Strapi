import React, { useState, useEffect } from 'react'
import './App.css'
import { Header } from './components/Header'
import Vegetable from './components/Vegetable'
import Cart from './components/Cart'


const App = () => {

  const [vegetables, setVegetables] = useState([])
  const [panier, setPanier] = useState({ items: [], total: 0 })

  // récupération de tous les légumes via l'API strapi
  const getVegetables = async () => {

    await fetch('http://localhost:1337/vegetables/')
      .then(result => result.json())
      .then(response => { // on récupère le result.json() dans reponse pour éviter d'écrire const response = ... au début du fetch
        // appel à la fonction setVegetables mis à disposition par useState afin de mettre à jor le tableau de légumes
        setVegetables(response)
      })
  }

  // pas de componentDidmount avec les hooks, on utilise useEffect !
  useEffect(() => {
    getVegetables()
  }, []) // /!\ 2ème paramètre de useEffect() : on lance getVegetables() quand le tableau de vegetables du useState est vide


  function ajouterAuPanier(objetLegume) {

    // copie du tableau panier.items que je place dans un tableau tabItems
    // j'ajoute objetLegume dans ce tableau à chaque cliquer
    const tabItems = [...panier.items, objetLegume]
    let sommeTotalPanier = panier.total + objetLegume.price

    console.log(tabItems);
    console.log(sommeTotalPanier);

    setPanier(
      {
        items: tabItems,
        total: sommeTotalPanier
      })
  }

  const listVegetables = vegetables.map((vegetable) => {
    return (
      <Vegetable
        key={vegetable.id + Math.random()}
        name={vegetable.name}
        price={vegetable.price}
        image={vegetable.image}
        choixLegume={() => ajouterAuPanier(vegetable)}
      />
    )
  })

  

  return (
    <div className="App">
      <Header />

      <div className="App-vegetables-wrapper">
        <div className="App-vegetables">
          {listVegetables}
        </div>
      </div>

      <div className="App-cart">
        <div className="App-cart-total">
          <Cart // appel aux valeurs panier.items et panier.total du useState, qui sont utilisées dans le component Cart
            panierItems={panier.items}
            totalPanier={panier.total}
          />
        </div>

      </div>
    </div>
  );
}

export default App;
