document.addEventListener("DOMContentLoaded", function () {
  const images = [
    { src: "https://via.placeholder.com/300x200", caption: "Classic Fade" },
    { src: "https://via.placeholder.com/300x200", caption: "Taper Cut" },
    { src: "https://via.placeholder.com/300x200", caption: "Buzz Cut" },
    { src: "https://via.placeholder.com/300x200", caption: "Undercut" }
  ];
  let currentIndex = 0;

  function showImage(index) {
    const image = document.getElementById("carouselImage");
    const caption = document.getElementById("carouselCaption");
    const container = document.getElementById("carouselContainer");

    image.classList.remove("show");
    void image.offsetWidth; // Force reflow to restart animation

    image.src = images[index].src;
    caption.textContent = images[index].caption;

    image.classList.add("show");
    container.classList.add("show-caption");
    setTimeout(() => container.classList.remove("show-caption"), 2000);
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }

  function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  }

  function toggleMenu() {
    document.getElementById("navMenu").classList.toggle("active");
  }

  window.nextImage = nextImage;
  window.prevImage = prevImage;
  window.toggleMenu = toggleMenu;

  showImage(currentIndex);
});
