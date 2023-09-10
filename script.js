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