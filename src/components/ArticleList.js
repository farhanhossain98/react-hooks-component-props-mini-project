import React from "react";
import blogData from "../data/blog"
import Article from "./Article";

function ArticleList({ posts }) {
    //we are taking the posts from the data. When we say blogPosts we are saying we are taking the blogPosts and iterating through them. We have a box of posts and iterating through the box to take the blogPosts and taking only that. Then we are taking the info from those blogPosts and rendering what we need from it.
    const arrayOfArticles = posts.map((blogPosts) => {
        return (
            <Article
                key={blogPosts.id}
                title={blogPosts.title}
                date={blogPosts.date}
                preview={blogPosts.preview}
                minutes={blogPosts.minutes}
            />
        )
    })
    return <main>{arrayOfArticles}</main>

}

export default ArticleList

//This is what we are going to render in the app.js. 
//Here we are going to import article.js 
//We add the prop posts.
//We need to take all of the blogposts that are in the blog.js and iterate through them. This is going to be done with .map. 
//.map is going to be the most used method for whenever we need to do any iteration through the arrays and render. 
//Then we take what we have from article and add what we need.
//We need tit;e, date, preview, and the minutes it takes to read the article as shown in the example. 
//We add key so it can have it unique id and be able to interact with differently. Since each post has a unique id we have that equal the key
//Then we return the array again in the main tag. This would be similar to when we invoke the function in normal JS such as building the function and the doing function() to ensure it is being processed.