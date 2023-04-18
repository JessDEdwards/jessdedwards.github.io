const carouselContainer = document.querySelector('.carousel-container');
const carouselItems = document.querySelectorAll('.carousel-item');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentItem = 0;
let intervalId;
function showItem(index) {
  // Hide all carousel items
  carouselItems.forEach(item => item.style.display = 'none');

  // Show the item at the specified index
  carouselItems[index].style.display = 'block';
}

function nextItem() {
  currentItem = (currentItem + 1) % carouselItems.length;
  showItem(currentItem);
}

function prevItem() {
  currentItem = (currentItem - 1 + carouselItems.length) % carouselItems.length;
  showItem(currentItem);
}
nextBtn.addEventListener('click', nextItem);
prevBtn.addEventListener('click', prevItem);

function startCarousel() {
  intervalId = setInterval(nextItem, 3000); // Change 3000 to the desired interval (in milliseconds)
}
startCarousel();
showItem(currentItem);


