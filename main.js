const overlay = document.getElementById('overlay');
const videoText = document.getElementById('video-text');

document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;

    // Entfernt die schwarze Fläche an der Mausposition
    overlay.style.clipPath = `circle(12vh at ${x}px ${y}px)`;

    // Blendet den Video-Text ein
    videoText.style.opacity = 1;
});

