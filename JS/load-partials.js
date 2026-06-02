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
    await loadPartial("hero-slot", "./Partials/hero.html");
});