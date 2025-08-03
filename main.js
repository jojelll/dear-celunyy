document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("typewriter-text");
  const audio     = document.getElementById("music");
  if (!container) {
    console.error("Typewriter container not found");
    return;
  }
  // Remove the container class (if it exists) and clear any text
  document.body.classList.remove("container");
  container.innerHTML = "";

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
  const total = text.length;
  const baseSpeed = 50;

  function typeWriter() {
    if (i < total) {
      // Use innerHTML if you ever want <br> on "\n"
      const char = text.charAt(i);
      container.innerHTML += (char === "\n" ? "<br>" : char);
      i++;
      // Slow down slightly toward the end
      const progress = i / total;
      const delay    = baseSpeed * (1 - 0.5 * progress);
      setTimeout(typeWriter, delay);
    }
  }
  typeWriter();

  // Audio fallback button
  if (audio) {
    audio.volume = 0.5;
    audio.play().catch(err => {
      console.warn("Auto-play failed, offering play button:", err);
      const btn = document.createElement("button");
      Object.assign(btn.style, {
        position: "fixed",
        top: "20px", left: "50%", transform: "translateX(-50%)",
        padding: "12px 24px", fontSize: "1.2rem",
        background: "linear-gradient(45deg, #ff7eb3, #ff758c)",
        border: "none", borderRadius: "30px",
        color: "white", cursor: "pointer",
        boxShadow: "0 0 10px rgba(255,255,255,0.5)",
        zIndex: "1000",
      });
      btn.textContent = "🎵 Play Music";
      btn.addEventListener("click", () => {
        audio.muted = false;
        audio.play().catch(e => console.error("Play on click failed:", e));
        btn.remove();
      }, { once: true });
      document.body.appendChild(btn);
    });
  }
});
