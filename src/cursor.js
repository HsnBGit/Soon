document.addEventListener("DOMContentLoaded", function() {
  const cursorDot = document.getElementById("data-cursor-dot");
  const cursorOutline = document.getElementById("data-cursor-outline");

  if (cursorDot && cursorOutline) {
    console.log("cursorDot initialized");

    window.addEventListener("mousemove", function(e) {
      const posX = e.clientX;
      const posY = e.clientY;

      cursorDot.style.left = `${posX}px`;
      cursorDot.style.top = `${posY}px`;

      cursorOutline.style.left = `${posX}px`;
      cursorOutline.style.top = `${posY}px`;
    });
  } else {
    console.error("Cursor elements not found.");
  }
});
