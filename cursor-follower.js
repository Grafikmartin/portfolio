// Cursor-Follower Funktion
function initCursorFollower() {
  // Erstelle das Follower-Element
  const follower = document.createElement('div');
  follower.className = 'cursor-follower';
  document.body.appendChild(follower);
  
  // Füge Styling hinzu
  const style = document.createElement('style');
  style.textContent = `
    .cursor-follower {
      position: fixed;
      width: 15px;
      height: 15px;
      background-color: chocolate;
      border-radius: 50%;
      pointer-events: none;
      z-index: 9999;
      transform: translate(-50%, -50%);
      opacity: 0.8;
      transition: transform 0.1s;
    }
  `;
  document.head.appendChild(style);
  
  // Variablen für aktuelle und Zielposition
  let mouseX = 0, mouseY = 0;
  let cursorX = 0, cursorY = 0;
  
  // Mouse-Move-Event-Listener
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });
  
  // Animation Loop für verzögerte Bewegung
  function updateFollowerPosition() {
    // Verzögerungseffekt durch Interpolation
    cursorX += (mouseX - cursorX) * 0.15;
    cursorY += (mouseY - cursorY) * 0.15;
    
    // Aktualisiere Position
    follower.style.left = `${cursorX}px`;
    follower.style.top = `${cursorY}px`;
    
    requestAnimationFrame(updateFollowerPosition);
  }
  
  // Starte die Animation
  updateFollowerPosition();
}

// Initialisiere den Follower nach dem Laden der Seite
document.addEventListener('DOMContentLoaded', initCursorFollower);
