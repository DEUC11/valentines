document.addEventListener("DOMContentLoaded", function () {
    const popup = document.querySelector(".popup");
    const closeButton = document.querySelector(".close");
    const glowImage = document.querySelector(".glow-image");

    glowImage.addEventListener("click", function () {
        popup.style.display = "block";
        document.body.classList.add("no-scroll"); // Disable background scroll
    });

    closeButton.addEventListener("click", function () {
        popup.style.display = "none";
        document.body.classList.remove("no-scroll"); // Enable background scroll
    });
});
