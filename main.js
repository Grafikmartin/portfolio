const overlay = document.getElementById('overlay');
const videoText = document.getElementById('video-text');

// Video-Element auswählen
const video = overlay.querySelector('video');

// Wiedergabegeschwindigkeit einstellen
video.playbackRate = 0.8;

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
        overlay.style.clipPath = `circle(10vh at ${x}px ${y}px)`;
    } else {
        // Kleiner Kreis außerhalb von `.overlay`
        overlay.style.clipPath = `circle(1vh at ${x}px ${y}px)`;
    }

    // Ändern Sie die Opazität des Video-Textes je nach Position
    videoText.style.opacity = isInsideOverlay ? 1 : 0.5;
});
