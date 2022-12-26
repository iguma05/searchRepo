class View {
	constructor() {
		this.app = document.getElementById('app');
		this.searchLine = this.createElement('section', 'search-line');
		this.searchInput = this.createElement('input', 'search-input');

		this.searchList = this.createElement('ul', 'search-list');
		this.searchListItem = this.createElement('li', 'search-list-item');
		this.searchList.append(this.searchListItem);

		this.main = this.createElement('section', 'main');
		this.repositoriesList = this.createElement('ul', 'repositories-list');
		this.repositoriesItem = this.createElement('li', 'repositories-item');
		this.repositoriesList.append(this.repositoriesItem);
		this.main.append(this.repositoriesList);

		this.itemData = this.createElement('ul', 'item');
		this.itemName = this.createElement('li', 'item-name');
		this.itemName.textContent = `Name:`; // ${name}`;
		this.itemOwner = this.createElement('li', 'item-owner');
		this.itemOwner.textContent = `Owner:`; //${owner}`;
		this.itemStars = this.createElement('li', 'item-stars');
		this.itemStars.textContent = `Stars:`; // ${stars}`;

		this.itemBtn = this.createElement('li', 'item-btn');
		this.btnClose = this.createElement('button', 'btn-close');
		
		this.itemBtn.append(this.btnClose);

		this.itemData.append(
			this.itemName,
			this.itemOwner,
			this.itemStars,
			this.itemBtn
		);
		this.repositoriesItem.append(this.itemData);

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
}

class Search {
	constructor(view) {
		this.view = view;

		this.view.searchInput.addEventListener('keyup', (event) =>
			console.log(event.value)
		);
	}
}
new Search(new View());
