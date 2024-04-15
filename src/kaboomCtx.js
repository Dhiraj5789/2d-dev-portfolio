import kaboom from "kaboom";

export const k = kaboom({
  global: false,
  // translates touch events to click events
  touchToMouse: true,
  // using the canvas element from index.html
  canvas: document.getElementById("game"),
  debug: false, // set to false once ready for production
});
