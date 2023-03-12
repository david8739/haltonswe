document.addEventListener('DOMContentLoaded', () => {
    const scrollContainer = document.querySelector("main");
    scrollContainer.addEventListener("wheel", (evt) => {
        if (window.innerWidth > window.innerHeight) {
            evt.preventDefault();
            scrollContainer.scrollLeft += evt.deltaY;
        } 
    });
});