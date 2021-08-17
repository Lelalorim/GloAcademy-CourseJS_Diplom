function countTimer(deadline) {

	const timerHours = document.querySelector('#timer-hours'),
		timerMinutes = document.querySelector('#timer-minutes'),
		timerDays = document.querySelector('#timer-days'),
		timerSeconds = document.querySelector('#timer-seconds');

	function getTimeRemaining() {

		const dateStop = new Date(deadline).getTime(),
			dateNow = new Date().getTime(),
			timeRemaining = (dateStop - dateNow) / 1000,
			seconds = Math.floor(timeRemaining % 60),
			minutes = Math.floor((timeRemaining / 60) % 60),
			hours = Math.floor(timeRemaining / 60 / 60) % 24,
			days = Math.floor(timeRemaining / 60 / 60 / 24) ;

		return {
			timeRemaining,
			days,
			hours,
			minutes,
			seconds
		};
	}

	const updateTime = () => {
		const timer = (getTimeRemaining());

		const addZero = digit => digit < 10 ? `0${digit}` : digit;

		timerDays.textContent = timer.days < 0 ? '00' : addZero(timer.days);
		timerHours.textContent = timer.hours < 0 ? '00' : addZero(timer.hours);
		timerMinutes.textContent = timer.minutes < 0 ? '00' : addZero(timer.minutes);
		timerSeconds.textContent = timer.seconds < 0 ? '00' : addZero(timer.seconds);

		if (timer.timeRemaining < 0) {
			clearInterval(idInterval);
		}
	};

	updateTime();

	const idInterval = setInterval(updateTime, 1000);
}

export default countTimer;