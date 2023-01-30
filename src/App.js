import React from "react"
import NavBar from "./components/NavBar"
import Hero from "./components/Hero"
import Cards from "./components/Cards"
import data from "./data"


export default function App(){
    const cards = data.map(item => {
        return (
            <Cards
            key={item.id}
            {...item}
            />
        )
    } )
    return (
        <div>
            <NavBar />
            <Hero/>
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )
}