import React from 'react'

export default function EmptyMenuAdmin({resetMenu}) {
  return (
    <div>
        <span>Pas de produit</span>
        <button onClick={resetMenu}>Générer un nouveau produit</button>
      </div>
  )
}
