	let rightAnswers = 0;
function game() {
	let answer = Math.round(Math.random() * 100);
	let maxTryCount = +prompt("Введите количество попыток");
	let userAnswer = +prompt("Загадано число от 1 до 100. У вас " + maxTryCount + " попыток. Угадайте это число");
	let tryCount;



	for (tryCount = 1; tryCount <= maxTryCount; tryCount++) {
		if (userAnswer == "" || userAnswer == null) {
		alert("Выход из игры");
		break;
		}
		if (userAnswer > answer) {
		alert("Больше, чем загадано")
	} else if (userAnswer < answer) {
		alert("Меньше, чем загадано")
	} else if (userAnswer == answer) {
		alert("Вы угадали! Го еще раз");
		rightAnswers++
		alert("Вы выиграли " + rightAnswers + " раз");
		game();
	}
		if (tryCount != maxTryCount) {
			userAnswer = +prompt("Осталось " + (maxTryCount - tryCount) + " попыток")	
		}
		if (tryCount == maxTryCount) {
		alert("Попытки кончились");
		alert("Вы выиграли " + rightAnswers + " раз");
		break;
	}

}


}

game();