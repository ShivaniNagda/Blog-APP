import data from "./content.js";

function createBlog() {
  data.forEach((content) => {
    console.log(content);
    let header = document.getElementById("main-header");
    let ai_blog = document.createElement("div");
    ai_blog.classList.add("card");
    ai_blog.classList.add("ai_blog");
    let ai_heading = document.createElement("h2");
    ai_heading.classList.add("ai_heading");
    ai_heading.innerHTML = `${content.title} \n <br> ${content.subtitle}`;
    let ai_content = document.createElement("p");
    ai_content.classList.add("ai_para");
    ai_content.textContent = content.content;
    let ai_img = document.createElement("img");
    let footer= document.createElement('footer');
    footer.innerHTML=`<h5>Author -:<strong> ${content.author} </strong> </h5>`;
    ai_blog.append(ai_heading, ai_content, ai_img);
    // next forEach 

  
      content.details.forEach((data,index)=>{
        let innerContent = document.createElement('div');
        let image = data.image;
       innerContent.innerHTML=`
        <div class="card blogger-subcontent">
          <h3>${index+1}. ${data.heading}</h3>
          <p>${data.content}</p>
          <img src=${data.image} />
        </div> `
        ai_blog.append(innerContent);
      })
  
    header.append(ai_blog,footer);
  });
}

createBlog();
