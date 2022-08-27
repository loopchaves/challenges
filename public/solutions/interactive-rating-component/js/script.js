const submit = document.getElementById('submit');
const rating = document.querySelectorAll('.circle');
var rate = '';

function removeRate() {
    const element = document.querySelector('.rate');
    if (element != null) element.classList.remove('rate');
}

rating.forEach((e) => {
    e.addEventListener('click', () => {
        removeRate();
        e.classList.add('rate');
        rate = e.textContent;
    });
});

submit.addEventListener('click', () => {
    if (rate != '') {
        const selected = document.getElementById('selected');
        selected.textContent = rate;
        const thanks = document.querySelector('.thanks-state');
        const rating = document.querySelector('.rating-state');
        rating.classList.add('hide');
        thanks.classList.remove('hide');
    }
});