     
let postsData = [
    { id: 1, author: 'John', content: 'The web development landscape is evolving at an unprecedented pace. With new technologies emerging rapidly, developers must stay ahead of the curve to remain relevant. Let’s explore some of the most exciting trends shaping the future of web development in 2025.', likes: 10, comments: ['Great post!', 'Nice photo!'], image: '../../Assets/AI/1.1.png' },
    { id: 2, author: 'Jane', content: 'Blockchain technology is revolutionizing the web, giving rise to Web3—a decentralized internet. Smart contracts, decentralized applications (dApps), and cryptocurrency payments are becoming mainstream, offering users more security and transparency.', likes: 15, comments: [], image: '../../Assets/AI/1.2.png' },
    { id: 3, author: 'Alice', content: 'Gone are the days of maintaining physical servers. Serverless computing enables developers to deploy applications without worrying about backend infrastructure. Platforms like AWS Lambda, Vercel, and Netlify allow scalable and cost-effective hosting.', likes: 8, comments: [], image: '../../Assets/AI/1.3.jpg' },
    { id: 4, author: 'Bob', content: 'PWAs bridge the gap between web and mobile apps, providing fast, offline-capable experiences. With improved browser support and better caching mechanisms, PWAs are set to dominate in 2025.', likes: 20, comments: [], image: '../../Assets/AI/1.5.png' },
  ];
  const likedPosts = new Set();
  function renderPosts() {
    const postsContainer = document.getElementById('posts');
    postsContainer.innerHTML = '';
  
    postsData.forEach((post) => {
      const postElement = document.createElement('div');
      postElement.classList.add('post');
  
      const authorElement = document.createElement('h3');
      authorElement.textContent = post.author;
  
      const contentElement = document.createElement('p');
      contentElement.textContent = post.content;
  
      const imageElement = document.createElement('img');
      imageElement.src = post.image;
      imageElement.alt = 'Post Image';
  
      const deleteButton = document.createElement('button');
      deleteButton.textContent=`Delete`
      deleteButton.classList.add('delete-button');
      deleteButton.style.backgroundColor = 'red';
      deleteButton.addEventListener('click',()=>{
        deletePost(post.id);
        
      })

      const likeButton = document.createElement('button');
      likeButton.textContent = `Like`;
      likeButton.classList.add('like-button');
      likeButton.addEventListener('click', () => {
        if (!likedPosts.has(post.id)) {
          console.log(!likedPosts.has(post.id),post.id)
            likePost(post.id);
            likedPosts.add(post.id);
            likeButton.disabled = true;  
            for(let ind of likedPosts){
                const button = document.querySelectorAll('.like-button')[ind-1];
                button.style.backgroundColor = 'red';
              
            }
    }
});

      const commentInput = document.createElement('input');
      commentInput.type = 'text';
      commentInput.placeholder = 'Write a comment...';
  
      const commentButton = document.createElement('button');
      commentButton.textContent = 'Comment';
      commentButton.classList.add('comment-button');
      commentButton.addEventListener('click', () => {
        addComment(post.id, commentInput.value);
        commentInput.value = '';
      });
  
      const postFooter = document.createElement('div');
      postFooter.classList.add('post-footer');
      postFooter.textContent = `Likes: ${post.likes}   Comments: ${post.comments.length}`;
  
      const commentsContainer = document.createElement('div');
      commentsContainer.classList.add('comments-container');
      commentsContainer.style.display = 'none';
  
      post.comments.forEach((comment) => {
        const commentElement = document.createElement('p');
        commentElement.textContent = comment;
        commentsContainer.appendChild(commentElement);
      });
  
      postElement.appendChild(authorElement);
      postElement.appendChild(imageElement);
      postElement.appendChild(contentElement);
      postElement.appendChild(commentInput);
      postElement.appendChild(likeButton);
      postElement.appendChild(commentButton);
      postElement.appendChild(deleteButton);
      postElement.appendChild(postFooter);
      postElement.appendChild(commentsContainer);
  
      postFooter.addEventListener('click', () => {
        if (commentsContainer.style.display === 'none') {
          commentsContainer.style.display = 'block';
        } else {
          commentsContainer.style.display = 'none';
        }
      });
  
      postsContainer.appendChild(postElement);
    });
  }

  // Function to handle post liking
  function likePost(postId) {
    const post = postsData.find(post => post.id === postId);
    if (post) {
      post.likes++;
      renderPosts();
    }
  }
  function deletePost(postId) {
    postsData = postsData.filter(post => post.id !== postId);
    console.log(postId,postsData)
    renderPosts();
  }
 
  // Function to handle adding a comment
  function addComment(postId, comment) {
    const post = postsData.find(post => post.id === postId);
    if (post) {
      post.comments.push(comment);
      renderPosts();
    }
  }
  
    // Function to handle post submission

    function submitPost(event) {
        event.preventDefault();
      
        const postInput = document.getElementById('postInput');
        const username = document.getElementById('u_name');
        const imageInput = document.getElementById('imageInput');
        const content = postInput.value;
        const userName = username.value;
        const image = imageInput.files[0];
      
        if (content.trim() === '' || !image) {
          return;
        }
        
        const imageURL = URL.createObjectURL(image);
        console.log(username,postInput)
        const newPost = {
          id: postsData.length + 1,
          author: userName,
          content: content,
          likes: 0,
          comments: [],
          image: imageURL
        };
      
        postsData.push(newPost);
        postInput.value = '';
        userName.value = '';
        imageInput.value = '';
        renderPosts();
      }
  // Event listeners
  document.getElementById('postForm').addEventListener('submit', submitPost);
  
  // Initial rendering                      
  renderPosts();
  