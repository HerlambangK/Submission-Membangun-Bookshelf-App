document.addEventListener('DOMContentLoaded', function () {
	if (isStorageExist()) loadStorage();
	document
		.querySelector('#create-form')
		.addEventListener('submit', function (event) {
			event.preventDefault();
			addBook();
		});
});

const yearElement = document.getElementById('currentYear');
const currentYear = new Date().getFullYear();
yearElement.textContent = currentYear;
