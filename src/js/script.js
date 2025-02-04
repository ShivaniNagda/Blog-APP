const images = [
    "./Assets/Background/2.png",
    "./Assets/Background/3.png",
   
];

let currentIndex = 0;
const imgElement = document.getElementById("slideshow");

function changeImage() {
    currentIndex = (currentIndex + 1) % images.length; // Loop through images
    imgElement.style.animation = "none"; // Remove animation
    setTimeout(() => {
        imgElement.src = images[currentIndex]; // Change image
        imgElement.style.animation = "change-image 1s ease-in-out"; // Reapply animation
    }, 10);
}

// Change image every 3 seconds
setInterval(changeImage, 3000);
