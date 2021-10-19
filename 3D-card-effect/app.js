// Movement Animation to happen
const card = document.querySelector('.card');
const container = document.querySelector('.container');

// Items 3D effect
const title = document.querySelector('.title');
const sneaker = document.querySelector('.sneaker img');
const h3 = document.querySelector('h3');
const sizes = document.querySelector('.sizes');
const purchase = document.querySelector('.purchase button');

// Animation Event
container.addEventListener('mousemove', (e) => {
     let xAxis = (window.innerWidth / 2 - e.pageX) / 10;
     let yAxis = (window.innerHeight / 2 - e.pageY) / 10;
     card.style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`;
});

// Animation In
container.addEventListener('mouseenter', (e) => {
     card.style.transition = 'none';
// Pop out
     title.style.transform = 'translateZ(100px)';
     sneaker.style.transform = 'translateZ(150px) rotateZ(35deg)';
     h3.style.transform = 'translateZ(100px)';
     sizes.style.transform = 'translateZ(100px)';
     purchase.style.transform = 'translateZ(100px)';
})

// Aimation Out
container.addEventListener('mouseleave', (e) => {
     card.style.transition = 'all 0.5s ease';
})
container.addEventListener('mouseleave', (e) => {
     card.style.transform = `rotateX(0deg) rotateY(0deg)`;
// Pop back
     title.style.transform = 'translateZ(0)';
     sneaker.style.transform = 'translateZ(0) rotateZ(0)';
     h3.style.transform = 'translateZ(0)';
     sizes.style.transform = 'translateZ(0)';
     purchase.style.transform = 'translateZ(0)';
})