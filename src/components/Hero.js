import React from "react"
import Grid from "../../public/images/grid-photos.png"

export default function() {
    return(
        <section id="section-hero">
            <img src={Grid} id="grid-photo"/>
            <h1 id="hero-header">Online Experiences</h1>
            <p id="hero-text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
  }