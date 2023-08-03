import React from "react"
import blogData from "../data/blog";


function Header({ name }) {
    return (
        <header>
            <h1 >{name}</h1>
        </header>
    )
}
export default Header

//Header is going to be where just have the name Overreacted 
//We add the header tag and then an h1 tag inside of it to write text in it
//We use name as a prop and then add it in the h1 tag following the instructions (no need to actually import blogdata)