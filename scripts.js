// scripts.js

// Tạo hiệu ứng hoa rơi
document.addEventListener('DOMContentLoaded', () => {
  const numberOfPetals = 30;
  const body = document.querySelector('body');

  for (let i = 0; i < numberOfPetals; i++) {
    const petal = document.createElement('div');
    petal.classList.add('petal');
    petal.innerText = '🌸';
    petal.style.left = Math.random() * 100 + 'vw';
    petal.style.animationDuration = (Math.random() * 3 + 2) + 's';
    petal.style.opacity = Math.random();
    petal.style.fontSize = Math.random() * 15 + 10 + 'px';
    body.appendChild(petal);
  }
});
