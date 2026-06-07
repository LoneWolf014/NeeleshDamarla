async function loadPartial(targetId, filePath) {
    const target = document.getElementById(targetId);
    if (!target) return;

    try {
        const response = await fetch(filePath);
        if (!response.ok) {
            throw new Error(`Failed to load ${filePath}: ${response.status}`);
        }

        target.innerHTML = await response.text();
    } catch (error) {
        console.error(error);
        target.innerHTML = "<p>Failed to load content.</p>";
    }
}

document.addEventListener("DOMContentLoaded", async () => {
    const basePath = window.location.pathname.substring(
        0,
        window.location.pathname.lastIndexOf("/") + 1
    );

    await loadPartial("hero-slot", `${basePath}Partials/hero.html`);
    await loadPartial("navbar-slot", `${basePath}Partials/navbar.html`);
});