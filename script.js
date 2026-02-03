const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const question = document.getElementById("question");
const title = document.getElementById("title");
const fireworks = document.getElementById("fireworks");
const usPhoto = document.getElementById("usPhoto");

let yesSize = 1;
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

  // Show fireworks
  fireworks.style.display = "block";

  // Show floating hearts
  setInterval(createHeart, 300);

  // Show your picture floating up
  usPhoto.style.display = "block";

  // Hide buttons after yes
  noBtn.style.display = "none";
});

noBtn.addEventListener("click", () => {
  if (noClicks < noPrompts.length) {
    question.textContent = noPrompts[noClicks];
    noClicks++;
  } else {
    question.textContent = "You know you want to say yes 😏";
  }
});

// Floating hearts function
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.textContent = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 20 + "px";
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 4000);
}
