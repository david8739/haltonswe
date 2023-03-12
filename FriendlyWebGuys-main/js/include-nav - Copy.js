document.addEventListener('DOMContentLoaded', () => {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'nav.html', true);
    xhr.onreadystatechange = function () {
        if (this.readyState !== 4) return;
        if (this.status !== 200) return; // or whatever error handling you want
        document.querySelector('nav').innerHTML = this.responseText;
    };
    xhr.send();
});