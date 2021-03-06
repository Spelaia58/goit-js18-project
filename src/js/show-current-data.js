import moment from 'moment';

const refs = {
    date: document.querySelector('#data'),
    suffix: document.querySelector('#suffix'),
    dayWeek: document.querySelector('#day-week'),
    time: document.querySelector('#time'),
    mounth: document.querySelector('#mounth'),
};

setInterval(showTime, 1000);
showCurrentData(refs.date, moment().format('Do').slice(0, 2));
showCurrentData(refs.suffix, moment().format('Do').slice(2));
showCurrentData(refs.dayWeek, moment().format('dddd').slice(0, 3));
showCurrentData(refs.mounth, moment().format('LL').split(' ')[0]);

function showCurrentData(link, value) {
    link.innerHTML = `${value}`;
}

function showTime() {
    time.innerHTML = `${moment().format('HH:mm:ss')}`;
}
