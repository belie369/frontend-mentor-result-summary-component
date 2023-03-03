const summaryUl = document.querySelector('.component__summary-details');
const liTemp = document.querySelector('.li-temp');

const fetchData = () => {
	fetch('/../../data.json')
		.then((response) => response.json())
		.then((data) => {
			const totalScore = summaryListFiller(data);
			const score = averageScore(totalScore, data.length);
			resultText(score);
		});
};

const summaryListFiller = (data) => {
	let sumScore = 0;

	for (const el of data) {
		const singleLi = liTemp.content.cloneNode(true);

		const wholeLi = singleLi.querySelector('.component__summary-item');
		const nameCategoryLi = (singleLi.querySelector('.component__summary-item-name').textContent = el.category);
		singleLi.querySelector('.component__summary-item-icon').src = el.icon;
		singleLi.querySelector('.component__summary-item-score--value').textContent = el.score;

		const lowerNameCategory = nameCategoryLi.toLowerCase();
		wholeLi.classList.add(`component__summary-item--${lowerNameCategory}`);

		summaryUl.append(singleLi);

		sumScore += el.score;
	}

	return sumScore;
};

const averageScore = (totalScore, elements) => {
	const scoreRoundSpan = document.querySelector('.component__result-score--round');
	const resultScore = Math.round(totalScore / elements);

	scoreRoundSpan.textContent = resultScore;

	return resultScore;
};

const resultText = (score) => {
	const resultTextH2 = document.querySelector('.component__result-text');
	const resultDetailsP = document.querySelector('.component__result-details');

	switch (true) {
		case score > 90:
			resultTextH2.textContent = 'Excellent';
			resultDetailsP.textContent = 'You scored higher than 90% of the people who have taken these tests.';
			break;
		case score >= 70 && score <= 89:
			resultTextH2.textContent = 'Great';
			resultDetailsP.textContent = 'You scored higher than 65% of the people who have taken these tests.';
			break;
		case score >= 50 && score <= 69:
			resultTextH2.textContent = 'Good';
			resultDetailsP.textContent = 'You scored higher than 45% of the people who have taken these tests.';
			break;
		case score >= 49 && score <= 29:
			resultTextH2.textContent = 'Okay';
			resultDetailsP.textContent = 'You scored higher than 35% of the people who have taken these tests.';
			break;
		case score <= 30:
			resultTextH2.textContent = 'Not Bad';
			resultDetailsP.textContent = 'You scored higher than 25% of the people who have taken these tests.';
			break;
	}
};

document.addEventListener('DOMContentLoaded', () => {
	fetchData();
});
