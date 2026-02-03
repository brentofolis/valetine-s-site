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
  // Grow YES
  yesSize += 0.3;
  yesBtn.style.transform = `scale(${yesSize})`;

  // Slide the GIF away
  if (gif) gif.classList.add("slide-out");

  // Fireworks off (background only if still present)
  if (fireworks) fireworks.style.display = "none";

  // After GIF slides, show photo and place text under it
  setTimeout(() => {
    const card = document.getElementById("card");

    // Move photo into the card (above text)
    card.insertBefore(usPhoto, title);

    // Show photo (CSS animation will run)
    usPhoto.style.display = "block";

    // Update text
    title.textContent = "YAAAY!!! 🎉💖";
    question.textContent = "Happy Valentine’s Day 🥰";

    // Ensure text is directly under the photo
    card.insertBefore(title, question);
    card.insertBefore(question, card.querySelector(".buttons"));

    // Hide NO button now that YES is accepted
    noBtn.style.display = "none";
  }, 300); // short delay feels snappy and clean
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
