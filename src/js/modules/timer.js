//timer
	let countDownDate = new Date("2024-11-08 19:00:00").getTime();
	let countDownFunction = setInterval(() => {
		let now = new Date().getTime();
		let distance = countDownDate - now;
		let days = Math.floor(distance / (1000 * 60 * 60 * 24));
		let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		let min = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		let sec = Math.floor((distance % (1000 * 60)) / 1000);
		if (sec < 10) {
			sec = "0" + sec;
		}

		let timer = document.querySelectorAll('.timer-block__container');
		for (let i = 0; i < timer.length; i++) {
			timer[i].querySelector('.timer-block__colum._hours').innerHTML = hours + " :&nbsp;";
			timer[i].querySelector('.timer-block__colum._min').innerHTML = min + " :&nbsp;";
			timer[i].querySelector('.timer-block__colum._sec').innerHTML = sec;
		}

		if (distance < 0) {
			clearInterval(countDownFunction);
			//document.body.classList.add("online");
			//document.querySelector('.fs-main__btns .button.pay').innerHTML = 'присоединиться';
		}
	});