import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import Article from "./Article";
import ArticleList from "./ArticleList";

console.log(blogData);

function App() {
  return (
    <div>
      <Header name={blogData.name} />
      <About image={blogData.image} about={blogData.about} />
      <ArticleList posts={blogData.posts} />
    </div>
  )
}

export default App;

//This is where we will render in all the information to the webpage. 
//As you can see we are going to render in the img, header, about the blog, and the article list. We do not need to add article because we are taking that info and adding it to the ArticleList js. 
//WE are then gong to add it by taking the name, image, and posts from each of the js files. Header is giving us the name of the page. About is giving us the image and blog info. Article list is giving us the list of the articles and everything that we are seeing under it. 
