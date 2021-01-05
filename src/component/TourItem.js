import React from 'react'
import {Link} from 'react-router-dom'

function TourItem(props) {
    return (
        <>
           <li className="tours__item">
               <Link className="tours__item__link" to={props.path}>
                   <figure className="tours__item__pic-wrap" data-category={props.label}>
                       <img src={props.src} alt="Travel Images" className="tours__item__img"/>
                   </figure>
                   <div className="tours__item__info">
                       <h5 className="tours__item__text">{props.text}</h5>
                   </div>
                   </Link>        
                   </li> 
        </>
    )
}

export default TourItem
