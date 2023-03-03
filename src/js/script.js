const summaryUl = document.querySelector('.component__summary-details');
const liTemp = document.querySelector('.li-temp');

const fetchData = () => {
	fetch('../data.json')
		.then((response) => response.json())
		.then((data) => {
			const totalScore = summaryListFiller(data);
			averageScore(totalScore, data.length);
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
	console.log(resultScore);

	scoreRoundSpan.textContent = resultScore;
};

document.addEventListener('DOMContentLoaded', () => {
	fetchData();
});
