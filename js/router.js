const app = document.getElementById("app");

function router() {
    let hash = window.location.hash.substring(1);

    if (!hash) hash = "home";

    app.innerHTML = Templates[hash];

    if (hash === "cadastro") {
        setupFormValidation();
    }
}

window.addEventListener("hashchange", router);
window.addEventListener("load", router);
