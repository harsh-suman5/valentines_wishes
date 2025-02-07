document.addEventListener("DOMContentLoaded", () => {
    const text = document.getElementById("text");
    let colors = ["#fff", "#ffeb3b", "#f8c291", "#ff6b6b", "#e74c3c"];
    let i = 0;

    setInterval(() => {
        text.style.color = colors[i];
        i = (i + 1) % colors.length;
    }, 1000);
});