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




function toggleAvailabilityForm(button) {
    const form = button.parentElement.nextElementSibling;
    if (form.style.display === "none" || form.style.display === "") {
        form.style.display = "block";
    } else {
        form.style.display = "none";
    }
}




// function toggleAvailabilityForm(button) {
//     const form = button.closest('.room-actions').nextElementSibling;
//     const isHidden = form.style.display === "none" || form.style.display === "";
    
//     // Close all other forms
//     document.querySelectorAll('.availability-form').forEach(f => {
//         f.style.display = "none";
//         f.previousElementSibling.querySelector('.btn-check-availability').textContent = "Check Availability";
//     });
    
//     // Toggle current form
//     form.style.display = isHidden ? "block" : "none";
//     button.textContent = isHidden ? "Hide Form" : "Check Availability";
// }



document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
        const link = dropdown.querySelector('a');
        
        link.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                dropdown.classList.toggle('active');
            }
        });
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.dropdown') && window.innerWidth <= 768) {
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
    });
});














