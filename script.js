window.addEventListener('DOMContentLoaded', () => {
    function setZero(num) {
        if (num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function getTimeRemaining(deadline) {
        const total = (Date.parse(deadline) - 10800000) - Date.parse(new Date()),
            days = Math.floor(total / 1000 / 60 / 60 / 24),
            hours = Math.floor((total / 1000 / 60 / 60) % 24),
            minutes = Math.floor((total / 1000 / 60) % 60),
            seconds = Math.floor((total / 1000) % 60);

        return {
            'total': total,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function displayTimeRemaining(timerSelector, deadline) {
        const timer = document.querySelector(timerSelector);
        let days = timer.querySelector('[data-unit="day"] span'),
            hours = timer.querySelector('[data-unit="hour"] span'),
            minutes = timer.querySelector('[data-unit="minute"] span'),
            seconds = timer.querySelector('[data-unit="second"] span'),
            timerInterval = setInterval(updateTimer, 1000);

        updateTimer();

        function updateTimer() {
            let time = getTimeRemaining(deadline);

            days.innerText = setZero(time.days);
            hours.innerText = setZero(time.hours);
            minutes.innerText = setZero(time.minutes);
            seconds.innerText = setZero(time.seconds);

            if (time.total <= 0) {
                clearInterval(timerInterval);
            }
        }
    }

    const deadline = '2022-01-01';

    displayTimeRemaining('.timer', deadline);
});