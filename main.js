const overlay = document.getElementById('overlay');
const videoText = document.getElementById('video-text');
const video = overlay.querySelector('video');

// Wiedergabegeschwindigkeit einstellen
video.playbackRate = 0.8;

// Video nach 5 Sekunden einblenden
setTimeout(() => {
    video.style.opacity = 1; // Sichtbar machen
}, 100);

document.addEventListener('mousemove', (e) => {
    const rect = overlay.getBoundingClientRect();
    const x = e.clientX - rect.left; // Relative X-Position zur `.overlay`
    const y = e.clientY - rect.top;  // Relative Y-Position zur `.overlay`

    // Überprüfen, ob die Maus innerhalb der `.overlay`-Grenzen liegt
    const isInsideOverlay = (
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom
    );

    if (isInsideOverlay) {
        // Großer Kreis innerhalb von `.overlay`
        overlay.style.clipPath = `circle(12vh at ${x}px ${y}px)`;
    } else {
        // Kleiner Kreis außerhalb von `.overlay`
        overlay.style.clipPath = `circle(1vh at ${x}px ${y}px)`;
    }

    // Ändern Sie die Opazität des Video-Textes je nach Position
    videoText.style.opacity = isInsideOverlay ? 1 : 0.5;
});

document.addEventListener("DOMContentLoaded", () => {
    const backgroundH1 = document.querySelector(".background h1");
  
    setTimeout(() => {
      backgroundH1.classList.add("animate"); // Klasse hinzufügen
    }, 1000); // Startet 1 Sekunde nach Laden der Seite
  });