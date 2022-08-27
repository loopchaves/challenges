const details = document.querySelectorAll('details');

details.forEach((e) => {
    e.addEventListener('click', () => {
        details.forEach((eClose) => {
            if (eClose !== e) eClose.removeAttribute('open');
        });
    });
});