// Ouvrir la modal
function openModal(title, type, duration, details, videoUrl = 'https://www.youtube.com/embed/jNQXAC9IVRw') {
    const modal = document.getElementById("movieModal");
    const videoElement = document.getElementById("movieVideo");
    
    // Remplir les données
    document.getElementById("movieTitle").textContent = title;
    document.getElementById("movieType").textContent = type;
    document.getElementById("movieDuration").textContent = duration;
    document.getElementById("movieDescription").textContent = details;
    
    // Charger la vidéo
    videoElement.src = videoUrl;
    
    // Afficher la modal
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
}

// Fermer la modal
function closeModal() {
    const modal = document.getElementById("movieModal");
    modal.style.display = "none";
    document.body.style.overflow = "auto";
}

// Fermer avec la touche Échap
document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
        closeModal();
    }
});

// Fermer la modal en cliquant sur l'overlay
document.addEventListener("DOMContentLoaded", function () {
    const overlay = document.querySelector(".modal-overlay");
    if (overlay) {
        overlay.addEventListener("click", closeModal);
    }
});