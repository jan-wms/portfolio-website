const menu = document.getElementById("nav-list");
const openButton = document.getElementById("open-button");
const closeButton = document.getElementById("close-button");

openButton.addEventListener("click", () => {
    menu.classList.add("active");
    openButton.classList.add("is-open");
    closeButton.classList.add("is-open");
    document.body.classList.add("menu-open");
});

closeButton.addEventListener("click", () => {
    menu.classList.remove("active");
    openButton.classList.remove("is-open");
    closeButton.classList.remove("is-open");
    document.body.classList.remove("menu-open");

});

document.querySelectorAll("#nav-list a").forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("active");
        openButton.classList.remove("is-open");
        closeButton.classList.remove("is-open");
        document.body.classList.remove("menu-open");
    });
});