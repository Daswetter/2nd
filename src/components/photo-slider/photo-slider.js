import './photo-slider.scss'
// проблемы с независимостью
// const next = document.querySelector('.photo-slider__next-button'),
//   prev = document.querySelector('.photo-slider__prev-button'),
//   slides = document.querySelectorAll('.photo-slider__item'),
//   dots = document.querySelectorAll('.photo-slider__dot');

// let index = 0;

// const activeSlide = n => {
//   for (let slide of slides){
//     slide.classList.remove('photo-slider__item_active');
//   }
//   slides[n].classList.add('photo-slider__item_active');
// }

// const activeDot = n => {
//   for (let dot of dots){
//     dot.classList.remove('photo-slider__dot_active');
//   }
//   dots[n].classList.add('photo-slider__dot_active');
// }

// const prepareCurrentSlide = n => {
//   activeSlide(index);
//   activeDot(index);
// }

// const nextSlide = () => {
//   if (index === slides.length - 1){
//     index = 0;
//     prepareCurrentSlide(index);
//   } else {
//     index++;
//     prepareCurrentSlide(index);
//   }
// }

// const prevSlide = () => {
//   if (index === 0){
//     index = slides.length - 1;
//     prepareCurrentSlide(index);
//   } else {
//     index--;
//     prepareCurrentSlide(index);
//   }
// }

// dots.forEach((item,indexDot) => {
//   item.addEventListener('click', () => {
//     index = indexDot;
//     prepareCurrentSlide(index);
//   })
// })
// next.addEventListener('click', nextSlide);
// prev.addEventListener('click', prevSlide);