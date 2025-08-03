window.onload = () => {
  document.body.classList.remove("container");

  const text = `Happy Birthday, dear Celuny,  
a beacon in my life's grand sea.  
You mean so much, truly, profoundly,  
my precious friend, for all to see.

And beyond the bond of friendship's grace,  
you shine so bright, in every space.  
My precious girl, with heart so pure,  
a gentle soul, of whom I'm sure.

May this new year, with skies so vast,  
bring endless joy, a joy to last.  
May grand adventures find your way,  
each rising sun, a brighter day.

Happy Birthday sweet Celuny,  
may life’s best gifts now come to thee.`;
  let i = 0;
  const speed = 50;
  const container = document.getElementById("typewriter-text");
  const totalChars = text.length;
  const audio = document.getElementById("music");

  function typeWriter() {
    if (i < totalChars) {
      container.textContent += text.charAt(i);
      i++;
      const progress = i / totalChars;
      const delay = speed * (1 - progress * 0.5);
      setTimeout(typeWriter, delay);
    }
  }
  typeWriter();

  audio.volume = 0.5;
  audio.play().catch((error) => {
    console.error("Audio playback failed:", error);
    const playButton = document.createElement("button");
    playButton.textContent = "Click to Play Audio";
    playButton.style.position = "absolute";
    playButton.style.top = "20px";
    playButton.style.left = "50%";
    playButton.style.transform = "translateX(-50%)";
    playButton.addEventListener("click", () => {
      audio.muted = false;
      audio.play().catch((error) => console.error("Audio playback failed on click:", error));
      playButton.remove();
    });
    document.body.appendChild(playButton);
  });
};
