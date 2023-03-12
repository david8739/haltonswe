document.addEventListener('DOMContentLoaded', () => {
    const scrollContainer = document.querySelector("main");
    scrollContainer.addEventListener("wheel", (evt) => {
        if (window.innerWidth > window.innerHeight) {
            evt.preventDefault();
            scrollContainer.scrollLeft += evt.deltaY;
            if (scrollContainer.scrollLeft == 0) {
                showBanner();
            } else if (scrollContainer.scrollLeft > 0) {
                hideBanner();
            }
        } else {
            evt.preventDefault();
            scrollContainer.scrollTop += evt.deltaY;
            if (scrollContainer.scrollTop == 0) {
                showBanner();
            } else if (scrollContainer.scrollTop > 0) {
                hideBanner();
            }
        }
    });

    scrollContainer.addEventListener("scroll", (evt) => {
        if (window.innerWidth > window.innerHeight) {
            if (scrollContainer.scrollLeft == 0) {
                showBanner();
            } else if (scrollContainer.scrollLeft > 0) {
                hideBanner();
            }
        } else {
            if (scrollContainer.scrollTop == 0) {
                showBanner();
            } else if (scrollContainer.scrollTop > 0) {
                hideBanner();

            }
        }
    });

    scrollContainer.addEventListener("touchmove", (evt) => {
        if (window.innerWidth > window.innerHeight) {
            if (scrollContainer.scrollLeft == 0) {
                showBanner();
            } else if (scrollContainer.scrollLeft > 0) {
                hideBanner();
            }
        } else {
            if (scrollContainer.scrollTop == 0) {
                showBanner();
            } else if (scrollContainer.scrollTop > 0) {
                hideBanner();

            }
        }
    });
});

function hideBanner() {
    const nav = document.querySelector('nav');
    const banner = document.querySelector('.banner-content');
    banner.style.clipPath = 'circle(0% at 0% 0%)';
    banner.style.opacity = '.7';
    nav.style.background = 'transparent';
}

function showBanner() {
    const nav = document.querySelector('nav');
    const banner = document.querySelector('.banner-content');
    banner.style.clipPath = 'circle(100% at 50% 50%)';
    banner.style.opacity = '1';
    nav.style.background = '#FF6088';
    // banner.style.height = '100vh';
}