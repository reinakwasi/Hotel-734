let currentIndex = 0;
const images = document.querySelectorAll('.carousel-image');

images.forEach((img) => {
    img.onerror = () => {
        console.error(`Image failed to load: ${img.src}`);
        img.style.display = 'none'; // Hide the image if it fails to load
    };
});

function showNextImage() {
    images[currentIndex].style.display = 'none';
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].style.display = 'block';
}

setInterval(showNextImage, 3000); // Change image every 3 seconds



// Function to cycle through images in a carousel
function startCarousel(carousel) {
    const images = carousel.querySelectorAll('img');
    let currentIndex = 0;

    setInterval(() => {
        // Hide the current image
        images[currentIndex].classList.remove('active');

        // Move to the next image
        currentIndex = (currentIndex + 1) % images.length;

        // Show the next image
        images[currentIndex].classList.add('active');
    }, 3000); // Change image every 3 seconds
}

// Initialize carousels for all gallery items
document.querySelectorAll('.image-carousel').forEach((carousel) => {
    startCarousel(carousel);
});