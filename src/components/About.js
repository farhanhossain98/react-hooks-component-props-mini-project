import React from "react";
import blogData from "../data/blog";

function About({ image, about }) {
    return (
        <aside>
            <img src={image} alt="blog logo" />
            <p>{about}</p>
        </aside>
    )
}
export default About

// Here we take the properties or 'props' image and about.
// We add brackets because we are indicating the props because we will be using the attributes later on and in Js. When adding it as objects or arrays we have to add the brackets
//We could have added in props and just use props.image but this way we are able to change the array and it will change the image and its less writing in the long run
//When adding an image we add it inside the image tag and the alt is to describe what the image is meant to be in case it doesn't render in.
// We then add a p tag and we are going to want to render in the about data from the blog.js. In this case we add it as a prop and then call it in brackets which will render it in when we import it in the App.js
