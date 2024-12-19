// Warten, bis die gesamte Seite geladen ist
window.addEventListener("load", function () {
    console.log("Seite vollständig geladen."); // Debug-Log

    const loadingScreen = document.getElementById("loading-screen");
    const content = document.getElementById("content");

    // Minimum-Anzeigedauer (3 Sekunden)
    const minimumLoadingTime = 2000; // in Millisekunden

    // Startzeitpunkt des Ladens
    const startTime = performance.now();

    // Ladeanzeige ausblenden, wenn Seite geladen ist und 3 Sekunden vergangen sind
    function removeLoadingScreen() {
        const elapsedTime = performance.now() - startTime;

        if (elapsedTime >= minimumLoadingTime) {
            // Wenn 3 Sekunden vergangen sind
            loadingScreen.style.opacity = "0"; // Sanftes Ausblenden
            loadingScreen.style.transition = "opacity 0.5s ease";

            // Nach der Ausblendanimation entfernen und Hauptinhalt anzeigen
            setTimeout(() => {
                loadingScreen.style.display = "none";
                content.style.display = "block";
                console.log("Ladeanzeige entfernt und Inhalt angezeigt.");
            }, 500); // Zeit für die Ausblendanimation
        } else {
            // Warte, bis die verbleibende Zeit der 3 Sekunden abgelaufen ist
            setTimeout(removeLoadingScreen, minimumLoadingTime - elapsedTime);
        }
    }

    // Entferne die Ladeanzeige
    removeLoadingScreen();
});
// Verhindert Scrollen auf der Seite
document.body.addEventListener('touchmove', function (e) {
    e.preventDefault();
  }, { passive: false });
  
  document.body.addEventListener('scroll', function (e) {
    e.preventDefault();
  }, { passive: false });
  
  // Setzt die c zurück, falls notwendig
  window.scrollTo(0, 0);
  