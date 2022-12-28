export class View {
	constructor() {
		this.app = document.getElementById('app');
		this.searchLine = this.createElement('section', 'search-line');
		this.searchInput = this.createElement('input', 'search-input');
		this.searchList = this.createElement('ul', 'search-list');
		this.searchListItem = this.createElement('li', 'search-list-item');

		this.main = this.createElement('section', 'main');
		this.repositoriesList = this.createElement('ul', 'repositories-list');
		this.repositoriesItem = this.createElement('li', 'repositories-item');

		this.main.append(this.repositoriesList);

		this.app.append(this.searchLine);
		this.app.append(this.main);

		this.searchLine.append(this.searchInput);
		this.searchLine.append(this.searchList);
	}
	createElement(elementTag, elementClass) {
		const element = document.createElement(elementTag);
		if (elementClass) element.classList.add(elementClass);
		return element;
	}

	createRepository(repositoryData) {
		const searchListItem = this.createElement('li', 'search-list-item');
		searchListItem.textContent = repositoryData.name;
		this.searchList.append(searchListItem);
		searchListItem.addEventListener('click', () =>
			this.createRepositoryItem(repositoryData)
		);
	}
	createRepositoryItem(repositoryData) {
		let { name, owner, stargazers_count } = repositoryData;
		const itemData = this.createElement('ul', 'item');
		const itemName = this.createElement('li', 'item-name');
		const itemOwner = this.createElement('li', 'item-owner');
		const itemStars = this.createElement('li', 'item-stars');
		const itemBtn = this.createElement('li', 'item-btn');
		const btnClose = this.createElement('button', 'btn-close');

		itemName.textContent = `Name: ${name}`;
		itemOwner.textContent = `Owner: ${owner.login}`;
		itemStars.textContent = `Stars: ${stargazers_count}`;
		itemBtn.append(btnClose);
		itemData.append(itemName, itemOwner, itemStars, itemBtn);
		let repositoriesItem = this.createElement('li', 'repositories-item');
		repositoriesItem.addEventListener('click', (event) =>
			this.deleteRepository(event.target, repositoriesItem)
		);
		repositoriesItem.append(itemData);
		this.repositoriesList.append(repositoriesItem);
	}
	deleteRepository(target, repositoriesItem) {
		if (target.className === 'btn-close') {
			repositoriesItem.remove();
		}
	}

	debounce(func) {
		let timer;
		return function () {
			clearTimeout(timer);
			timer = setTimeout(() => func.apply(this.arguments), 500);
		};
	}
}
