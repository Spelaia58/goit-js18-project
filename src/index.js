import './scss/styles.scss';

const time = document.querySelector('#time');
const currentMounth = document.querySelector('#mounth');

const showTime = () => {
    let today = new Date();
    let hour = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();

    hour = hour % 24 || 24;

    time.innerHTML = `${addZero(hour)}<span>:</span>${addZero(
        min,
    )}<span>:</span>${addZero(sec)}`;

    setTimeout(showTime, 1000);
};

const addZero = number => (parseInt(number, 10) < 10 ? '0' : '') + number;

showTime();

const showMounth = () => {
    let mounth = new Date();
    let current = mounth.getMonth();

    currentMounth.textContent = `${current}`;
};

// showMounth();
