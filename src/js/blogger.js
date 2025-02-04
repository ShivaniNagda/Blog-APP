
import data from "./content.js";

function createBlog(){  

data.forEach((content)=>{
console.log(content);
let header = document.getElementById("main-header");
let ai_blog = document.createElement('div');
ai_blog.classList.add('card');
let ai_heading = document.createElement('h2');
ai_heading.textContent=content.title;
let ai_content = document.createElement('p');
ai_blog.classList.add('card-body');
ai_content.textContent=content.content;
let ai_img = document.createElement('img');

header.append(ai_blog);
ai_blog.append(ai_heading,ai_content,ai_img);

})
}

createBlog();

