import { useState } from "react"
import "./product.css"
export default function Product(props) {
  const [dore, setdore] = useState(false);
  return (<div>
    <div className="card_produit" onClick={() => { console.log(props.product.id) }}>
      <a href="/shop">
        <img src={props.product.image[0]}
          alt="Product" className="image_produit" />
      </a>
      <div className="info_produit my-5">
        <p className="nom_produit">{props.product.nom}</p>
        <div className="flex items-center">
          <p className="prix_solde">{props.product.prix_novel} dh</p>
          <del><p className="prix_precedent">{props.product.prix_préce} dh</p></del>
          <div className="coeur_panier">{/* // eslint-disable-next-line */}
            
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="panier" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
              </svg>

            
            <svg xmlns="http://www.w3.org/2000/svg" className="coeur" onClick={() => { setdore(!dore) }}
              fill={dore ? "red" : "none"} viewBox="0 0 24 24" stroke={dore ? "red" : "currentColor"} enableBackground="" >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}