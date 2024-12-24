// 🎥 Automatic Photo Slideshow
let slideIndex = 0;

function showSlides() {
  const slides = document.querySelectorAll('.slide');
  
  // Hide all slides
  slides.forEach(slide => slide.style.display = 'none');
  
  // Increment index
  slideIndex++;
  
  // Reset index if it exceeds the number of slides
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  
  // Display the current slide
  slides[slideIndex - 1].style.display = 'block';
  
  // Change slide every 2 seconds
  setTimeout(showSlides, 3000);
}

// Start the slideshow
showSlides();

// 🎵 Music Player Controls
// 🎵 Toggle Play/Pause Music
// Get the button and audio elements
const backgroundMusic = document.getElementById('backgroundMusic');

// Play the music when the page loads
window.onload = () => {
  backgroundMusic.play()
    .then(() => {
      console.log("Music is playing!");
    })
    .catch((error) => {
      console.error("Error playing music:", error);
      // Handle error in case autoplay is blocked by the browser
    });
};


