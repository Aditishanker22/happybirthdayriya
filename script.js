// Music button logic
const playMusicButton = document.getElementById("playMusic");
const bgMusic = document.getElementById("bgMusic");
playMusicButton.addEventListener("click", () => {
  bgMusic.play().catch((err) => {
    console.log("Autoplay blocked:", err);
  });
});

// Next page logic
const nextPageButton = document.getElementById("nextPage");
nextPageButton.addEventListener("click", () => {
  window.location.href = "page2.html";
});

// Floating hearts
const heartsContainer = document.getElementById("hearts-container");

setInterval(() => {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 3 + Math.random() * 2 + "s";
  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}, 300);
// Music for Page 2
window.addEventListener("DOMContentLoaded", () => {
  const music = document.getElementById("bgMusic2");
  if (music) {
    music.play().catch(() => {
      // Autoplay block by browser, optional handling here
      console.log("Autoplay prevented. Click to play.");
    });
  }
});

// Slider functionality
const slider = document.getElementById("slider");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let scrollAmount = 0;
const slideWidth = slider.querySelector(".slide").offsetWidth + 20; // image + gap

nextBtn.addEventListener("click", () => {
  if (scrollAmount + slideWidth * 4 < slider.scrollWidth) {
    scrollAmount += slideWidth;
    slider.scrollTo({ left: scrollAmount, behavior: "smooth" });
  }
});

prevBtn.addEventListener("click", () => {
  if (scrollAmount > 0) {
    scrollAmount -= slideWidth;
    slider.scrollTo({ left: scrollAmount, behavior: "smooth" });
  }
});
document.addEventListener('DOMContentLoaded', () => {
    const slidesWrapper = document.getElementById('slidesWrapper');
    const allImages = document.querySelectorAll('.slider-image');
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');
    const totalImages = allImages.length;

    let firstVisibleImageIndex = 0;
    let imagesPerView = 4;

    function updateImagesPerView() {
        if (window.innerWidth <= 480) {
            imagesPerView = 1;
        } else if (window.innerWidth <= 768) {
            imagesPerView = 2;
        } else {
            imagesPerView = 4;
        }

        allImages.forEach(img => {
            img.style.width = `calc((100% - ${imagesPerView * 1}rem) / ${imagesPerView})`;
        });

        const maxIndex = totalImages - imagesPerView;
        if (firstVisibleImageIndex > maxIndex) {
            firstVisibleImageIndex = maxIndex >= 0 ? maxIndex : 0;
        }

        showCurrentView();
    }

    function showCurrentView() {
        if (allImages.length === 0) return;
        const imageWidth = allImages[0].offsetWidth + (parseFloat(getComputedStyle(allImages[0]).marginLeft) * 2);
        const translateXValue = -firstVisibleImageIndex * imageWidth;
        slidesWrapper.style.transform = `translateX(${translateXValue}px)`;
    }

    function nextImage() {
        if (firstVisibleImageIndex < totalImages - imagesPerView) {
            firstVisibleImageIndex++;
        } else {
            firstVisibleImageIndex = 0;
        }
        showCurrentView();
    }

    function prevImage() {
        if (firstVisibleImageIndex > 0) {
            firstVisibleImageIndex--;
        } else {
            firstVisibleImageIndex = totalImages - imagesPerView;
            if (firstVisibleImageIndex < 0) firstVisibleImageIndex = 0;
        }
        showCurrentView();
    }

    nextButton.addEventListener('click', nextImage);
    prevButton.addEventListener('click', prevImage);
    window.addEventListener('resize', updateImagesPerView);

    updateImagesPerView();
});
