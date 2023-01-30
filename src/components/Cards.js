import React from "react"
import Star from "../../public/images/star.png"


export default function Card (props){
    let badgeText
    if(props.openSpots === 0){
        badgeText = "SOLD OUT"
    }else if (props.location === "Online"){
        badgeText = "ONLINE"
    }

    return(
        <div className="cardSection">
        {badgeText && <div className="card-badge">{badgeText}</div>}
            <a href="#"><img src={props.coverImg} id="athlete-photo"/></a>
            <div className="info">
                <img src={Star} id="star"/>
                <span id="rating">{props.stats.rating}</span>
                <span id="reviews">({props.stats.reviewCount}) • </span>
                <span id="location">{props.location}</span>
            </div>
            <div className="info-text">
            <p className="title">{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
            </div>
            
        </div>
    )
}