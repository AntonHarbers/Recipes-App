// Variable declaration
let h1 = document.querySelector('h1');
let body = document.querySelector('body');

let colors = ['red', 'orange', 'yellow', 'green', 'violet']; // can be extended to include more colors
let counter = 0;

// h1 cycles through the colors of the colors array every 2-4 seconds
setInterval(function () {
  h1.style.color = colors[counter];
  counter >= colors.length ? (counter = 0) : counter++;
}, Math.random() * 2000 + 2000);

// Small animation when moving the mouse
document.addEventListener('mousemove', function (e) {
  let div = document.createElement('div');
  initStyles(div, e);
  body.appendChild(div);

  // update the styles and then destroy the div
  setTimeout(function () {
    updateSyles(div);
  }, Math.random() * 400 + 100);

  setTimeout(function () {
    div.remove();
  }, Math.random() * 2000 + 500);
});

const initStyles = (div, e) => {
  div.style.position = 'absolute';
  div.style.left = e.clientX + 'px';
  div.style.top = e.clientY + 'px';
  div.style.width = `${Math.random() * 5 + 10}px`;
  div.style.height = `${Math.random() * 5 + 10}px`;
  div.style.backgroundColor = 'red';
  div.style.borderRadius = '50%';
  div.style.opacity = 1;
  div.style.transition = 'all 0.5s ease';
  div.style.transform = 'scale(0.01)';
};

const updateSyles = (div) => {
  div.style.opacity = 0;
  div.style.transform = 'scale(5)';
  div.style.backgroundColor = 'orange';
};
