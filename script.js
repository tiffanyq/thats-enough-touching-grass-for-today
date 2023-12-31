// buttons

function toggleSound() {
  const v = document.getElementById("grass");
  const s = document.getElementById("sound");
  if (v.muted) {
    v.muted = false;
    s.innerText = "turn sound off";
  } else {
    v.muted = true;
    s.innerText = "turn sound on";
  }
}

function logOn() {
  youAreAlreadyHere();
}

function logOff() {
  youAreAlreadyHere();
}

function youAreAlreadyHere() {
  console.log("thank u for meeting me here :)");
  const m = document.createElement("span");
  m.innerText="you are already here";
  m.className="message";
  document.body.appendChild(m);
}

// hearts
const HEART_COLOR = "💚";
const BASE_SIZE = 12;
const MAX_ADDITIONAL_SIZE = 24;
const BASE_TIMEOUT = 100;
const MAX_ADDITIONAL_TIMEOUT = 1400;

class Heart {
  constructor(x,y) {
    this.x = x;
    this.y = y;
    this.size = BASE_SIZE + Math.floor(Math.random() * MAX_ADDITIONAL_SIZE);
    this.timeout = BASE_TIMEOUT + Math.floor(Math.random() * MAX_ADDITIONAL_TIMEOUT);
  }

  render() {
    const b = document.body;
    const heartElement = document.createElement("div");
    heartElement.innerText = HEART_COLOR;
    heartElement.style.position = "fixed";
    heartElement.style.fontSize =  this.size + "px";
    heartElement.style.left = this.x.toString() + "px";
    heartElement.style.top = this.y.toString() + "px";
    b.appendChild(heartElement);
    setTimeout(function() {
      heartElement.remove();
  }, this.timeout);
  }
}

function touchGrass(e) {
  const x = e.clientX;
  const y = e.clientY;
  const h = new Heart(x,y);
  h.render();
}

function touchGrassTouchInteraction(e) {
  const x = e.touches[0].clientX;
  const y = e.touches[0].clientY;
  const h = new Heart(x, y);
  h.render();
}

window.onload = function() {
  document.body.addEventListener("mousemove", touchGrass);
  document.body.addEventListener("touchmove", touchGrassTouchInteraction);
}