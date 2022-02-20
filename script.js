const name1 = document.getElementById('name1');
const email = document.getElementById('email');
const phone = document.getElementById('phone');

const progress = document.getElementById('progress');
const circles = document.querySelectorAll('.circle');
const clear = document.getElementById('clear-button');

let currentActive = 0;

// check if input are empty

name1.addEventListener('input', () => {
  if (name1.value.length !== 0) {
    circles[0].classList.add('active');
    currentActive++;
    const actives = document.querySelectorAll('.active');
    progress.style.width =
      ((actives.length - 1) / (circles.length - 1)) * 100 + '%';
  } else {
    circles[0].classList.remove('active');
    currentActive--;
  }
});
email.addEventListener('input', () => {
  if (email.value.length !== 0) {
    circles[1].classList.add('active');
    currentActive++;
    const actives = document.querySelectorAll('.active');
    progress.style.width =
      ((actives.length - 1) / (circles.length - 1)) * 100 + '%';
  } else {
    circles[1].classList.remove('active');
    currentActive--;
  }
});
phone.addEventListener('input', () => {
  if (phone.value.length !== 0) {
    circles[2].classList.add('active');
    currentActive++;
    const actives = document.querySelectorAll('.active');
    progress.style.width =
      ((actives.length - 1) / (circles.length - 1)) * 100 + '%';
  } else {
    circles[2].classList.remove('active');
    currentActive--;
  }
});

name1,
  email,
  phone.addEventListener('input', () => {
    if (
      name1.value.length !== 0 &&
      email.value.length !== 0 &&
      phone.value.length !== 0
    ) {
      circles[0].classList.add('active2');
      circles[1].classList.add('active2');
      circles[2].classList.add('active2');
      progress.classList.add('a');
    } else {
      circles[0].classList.remove('active2');
      circles[1].classList.remove('active2');
      circles[2].classList.remove('active2');
      progress.classList.remove('a');
    }
  });

clear.addEventListener('click', () => {
  circles[0].classList.remove('active2');
  circles[1].classList.remove('active2');
  circles[2].classList.remove('active2');
  circles[0].classList.remove('active');
  circles[1].classList.remove('active');
  circles[2].classList.remove('active');
  progress.classList.remove('a');
  progress.style.width = 0;
});
