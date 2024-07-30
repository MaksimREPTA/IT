let currentImageIndex = 0;
const images = [
  "./Images/screenshot 1.jpg",
  "./Images/screenshot 2.jpg",
  "./Images/screenshot 3.jpg",
];
function showImage(index) {
  const carouselImage = document.getElementById("carousel-image");
  carouselImage.src = images[index];
}
function prevImage() {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  showImage(currentImageIndex);
}
function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  showImage(currentImageIndex);
} // Initialize the first image showImage(currentImageIndex);
