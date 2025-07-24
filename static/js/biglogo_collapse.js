let bigLogoContainer;

document.addEventListener("DOMContentLoaded", (event) => {
    bigLogoContainer = document.getElementById("biglogo-container");
    if (bigLogoContainer === null) { return; }
    else {
        bigLogoContainer.style.height = "595px"; // Set initial height
    }
});

document.addEventListener("scroll", () => {
    const maxScroll = 300;
    const scrollY = Math.min(window.scrollY, maxScroll);
    const minHeight = 300;
    const maxHeight = 595;
    const newHeight = Math.max(minHeight, maxHeight - (scrollY / maxScroll) * (maxHeight - minHeight));
    
    bigLogoContainer.style.height = `${newHeight}px`;
    if (newHeight == minHeight) {
        bigLogoContainer.style.opacity = "0";
        bigLogoContainer.style.pointerEvents = "none";
    } else {
        bigLogoContainer.style.opacity = "1";
        bigLogoContainer.style.pointerEvents = "auto";
        
    }
});