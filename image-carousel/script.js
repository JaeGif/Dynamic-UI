class Carousel {
  static bottom = 0;
  static next() {
    if (Carousel.bottom === 375) {
      Carousel.bottom = 0;
    } else {
      Carousel.bottom += 75;
    }
  }
  static previous() {
    if (Carousel.bottom === 0) {
      Carousel.bottom = 375;
    } else {
      Carousel.bottom -= 75;
    }
  }
}

const listen = (() => {
  const previousBtn = document.querySelector('#previous-btn');
  const nextBtn = document.querySelector('#next-btn');

  previousBtn.addEventListener('click', () => {
    previous();
  });
  nextBtn.addEventListener('click', () => {
    next();
  });
})();

function next() {
  const imgContainer = document.querySelector('#img-container');
  Carousel.next();
  const vhString = String(Carousel.bottom + 'vh');
  imgContainer.style.bottom = vhString;
}
function previous() {
  const imgContainer = document.querySelector('#img-container');
  Carousel.previous();
  const vhString = String(Carousel.bottom + 'vh');
  imgContainer.style.bottom = vhString;
}
