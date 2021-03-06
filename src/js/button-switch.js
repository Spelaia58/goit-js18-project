const refs = {
    btnWrap: document.querySelector('.btn__wrap'),
    citySection: document.querySelector('.city__section'),
    degree: document.querySelector('.js-degree'),
    wrapDateQuote: document.querySelector('.js-wrapper'),
    fiveDaysBtn: document.querySelector('.js-days'),
    daysContainer: document.querySelector('.js-five-days'),
};

refs.btnWrap.addEventListener('click', onBtnClick);

function onBtnClick(event) {
    if (event.target.nodeName === 'BUTTON') {
        if (event.target.classList.contains('js-days')) {
            addClassList(refs.degree, 'is-hidden');
            addClassList(refs.wrapDateQuote, 'is-hidden');
            removeClassList(refs.citySection, 'is-hidden');
        } else {
            removeClassList(refs.degree, 'is-hidden');
            removeClassList(refs.wrapDateQuote, 'is-hidden');
            addClassList(refs.citySection, 'is-hidden');
            refs.daysContainer.innerHTML = '';
        }
    }
}

function addClassList(ref, style) {
    return ref.classList.add(style);
}

function removeClassList(ref, style) {
    return ref.classList.remove(style);
}

export default onBtnClick;
