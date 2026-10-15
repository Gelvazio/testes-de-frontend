const botaoDarkMode = document.getElementById("darkmode");
const quadradoMaior = document.querySelector(".quadrado-maior");

botaoDarkMode.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    quadradoMaior.classList.toggle("dark");
    botaoDarkMode.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        botaoDarkMode.textContent = "Light Mode";
    } else {
        botaoDarkMode.textContent = "Dark Mode";
    }
});