import React from "react"

export default function NavBar() {
    const logo =  "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";
    return (
        <nav>
            <div>
                <img
                    alt="Joao campos"
                    src={logo}
                    className="img-navbar"
                />
            </div>
        </nav>
    )
}