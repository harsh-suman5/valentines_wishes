document.addEventListener("DOMContentLoaded", () => {
    // Typing Text Animation
    const textElement = document.getElementById("text");
    const message = "🌹 Happy Rose Day, My Love! 🌹";
    let index = 0;

    function typeText() {
        if (index < message.length) {
            textElement.innerHTML += message.charAt(index);
            index++;
            setTimeout(typeText, 100);
        } else {
            textElement.style.borderRight = "none"; // Remove blinking cursor
        }
    }

    typeText();

    // Falling Petals Animation
    const petalsContainer = document.querySelector(".petals");

    function createPetal() {
        const petal = document.createElement("div");
        petal.classList.add("petal");
        petal.style.left = Math.random() * 100 + "vw";
        petal.style.animationDuration = (Math.random() * 3 + 3) + "s";
        petalsContainer.appendChild(petal);

        setTimeout(() => { petal.remove(); }, 5000);
    }

    setInterval(createPetal, 300);
});
