const summaryUl = document.querySelector('.component__summary-details');
const liTemp = document.querySelector('.li-temp');

const fetchData = () => {
	fetch('../data.json')
		.then((response) => response.json())
		.then((data) => summaryListFiller(data));
};

const summaryListFiller = (data) => {
	for (const el of data) {
		const singleLi = liTemp.content.cloneNode(true);
		singleLi.querySelector('.component__summary-item-icon').src = el.icon;
		singleLi.querySelector('.component__summary-item-name').textContent = el.category;
		singleLi.querySelector('.component__summary-item-score--value').textContent = el.score;

		summaryUl.append(singleLi);
	}
};

// const addingClassColor = () => {
// 	const liCollection = document.getElementsByClassName('component__summary-item');

// 	for (var i = 0; i < liCollection.length; i++) {
// 		console.log(liCollection[i]);
// 	}
// };

// switch (expr) {
// 	case 'Oranges':
// 		console.log('Oranges are $0.59 a pound.');
// 		break;
// 	case 'Mangoes':
// 	case 'Papayas':
// 		console.log('Mangoes and papayas are $2.79 a pound.');
// 		// Expected output: "Mangoes and papayas are $2.79 a pound."
// 		break;
// 	default:
// 		console.log(`Sorry, we are out of ${expr}.`);
// }

document.addEventListener('DOMContentLoaded', () => {
	fetchData();
});
