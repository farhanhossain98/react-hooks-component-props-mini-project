import React from "react";
import blogData from "../data/blog"

function minutesToRead(minutes) {
    let interval = 5
    let emoji = '☕'
    let emojis = ''

    if (minutes >= 30) {
        interval = 10
        emoji = '🍱'
    }
    for (let i = 0; i < minutes; i += interval)
        emojis += emoji
    return (
        emojis
    )
}
//in this case we have a function on how many minutes it takes to read the article. They have intervals of 5 min. Every 5 minutes is then set shown by the coffee emoji. Then emojis will be an empty string so we can insert as many coffee cups as possible.
//then if the time exceeds 30 min it will be a bento box emoji which is set by an interval of 10 min each. 
//we have an if statement that if minutes is 30 min or more it will have an interval of ten minutes and the emoji will be represented by the bento box
//We then have a for statement for the ones under the 30 min value.
//we have i=0 and if i is less than minutes which we set to more or equal to 30 min it will add the number of coffee cups based on the time.
//We have emojis equal to the addition of emojis per interval and we will return the value of emojis

function Article({ minutes, title, preview, date = 'January 1,1970' }) {
    return (
        <article>
            <h3 >{title}</h3>
            <small>{date} {minutesToRead(minutes)} {minutes} min read </small>
            <p>{preview}</p>

        </article>
    )
}

export default Article

//Here we are going adding what is needed on the article. You can consider this to be the article card and in this case we are going to ask the question: What are we adding?
//By looking at the example, we are adding the article title, date, and preview which is given to us in the blog.js.
//We are then adding the article tag and have three children components which have the title, small and a p tag and we add accordingly. 
//We have the things we are adding as properties and they as us to set the date to a specific time