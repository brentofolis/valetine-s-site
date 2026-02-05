const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const question = document.getElementById("question");
const title = document.getElementById("title");
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

  // Slide GIF away
  if (gif) gif.classList.add("slide-out");

  setTimeout(() => {
    title.textContent = "YAAAY!!! 🎉💖";
    question.textContent = "Happy Valentine’s Day 🥰";

    // Hide NO button
    noBtn.style.display = "none";
  }, 300);
});

noBtn.addEventListener("click", () => {
  if (noClicks < noPrompts.length) {
    question.textContent = noPrompts[noClicks];
    noClicks++;
  } else {
    question.textContent = "You know you want to say yes 😏";
  }

  // Shrink NO
  noSize -= 0.15;
  if (noSize < 0.4) noSize = 0.4;
  noBtn.style.transform = `scale(${noSize})`;

  // Grow YES
  yesSize += 0.2;
  yesBtn.style.transform = `scale(${yesSize})`;
});
