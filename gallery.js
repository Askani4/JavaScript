// Get all images and controls
const images = document.querySelectorAll('.gallery img');
const prevButton = document.getElementById('prevBtn');
const nextButton = document.getElementById('nextBtn');

let currentImageIndex = 0;

// Show the first image by default
images[currentImageIndex].style.display = 'block';

// Function to show the image at a specific index
function showImage(index) {
    images.forEach((img) => {
        img.style.display = 'none';
    });
    images[index].style.display = 'block';
}

// Event listener for the "Previous" button
prevButton.addEventListener('click', function() {
    currentImageIndex = (currentImageIndex === 0) ? images.length - 1 : currentImageIndex - 1;
    showImage(currentImageIndex);
});

// Event listener for the "Next" button
nextButton.addEventListener('click', function() {
    currentImageIndex = (currentImageIndex === images.length - 1) ? 0 : currentImageIndex + 1;
    showImage(currentImageIndex);
});
