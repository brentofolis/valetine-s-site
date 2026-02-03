const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const question = document.getElementById("question");
const title = document.getElementById("title");
const fireworks = document.getElementById("fireworks");
const usPhoto = document.getElementById("usPhoto");
const gif = document.getElementById("gif");

let yesSize = 1;
let noSize = 1;
let noClicks = 0;

const noPrompts = [
  "Are you sure? 🥺",
  "Are you really sure?? 😭",
  "Really really sure?? 😩",
  "Okay now you’re just being mean 😔",
  "Last chance… 😢"
];

yesBtn.addEventListener("click", () => {
  yesSize += 0.3;
  yesBtn.style.transform = `scale(${yesSize})`;

  // Final YES state
  title.textContent = "YAAAY!!! 🎉💖";
  question.textContent = "Happy Valentine’s Day 🥰";

  // Fireworks on
  fireworks.style.display = "block";

  // Slide the gif away
  if (gif) gif.classList.add("slide-out");

  // Show your picture floating up (after gif slides away)
  setTimeout(() => {
    usPhoto.style.display = "block";
  }, 800);

  // Hide NO button
  noBtn.style.display = "none";
});

noBtn.addEventListener("click", () => {
  // Change the prompt text
  if (noClicks < noPrompts.length) {
    question.textContent = noPrompts[noClicks];
    noClicks++;
  } else {
    question.textContent = "You know you want to say yes 😏";
  }

  // Shrink NO button
  noSize -= 0.15;
  if (noSize < 0.4) noSize = 0.4; // don’t let it disappear completely
  noBtn.style.transform = `scale(${noSize})`;

  // Grow YES button
  yesSize += 0.2;
  yesBtn.style.transform = `scale(${yesSize})`;
});

