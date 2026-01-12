const menuPageContent = (() => {
    let container;
    let menuHeader;
    let cardContainer;
    let menuItems = [];

    const setupDOM = () => {
        container = document.createElement('div');
        container.id = 'menuContainer';

        menuHeader = document.createElement('div');
        menuHeader.classList.add('menu-header');

        cardContainer = document.createElement('div');
        cardContainer.classList.add('card-container');
    }

    const inputPreMadeContent = () => {
        const headerText = document.createElement('h1');
        const subHeaderText = document.createElement('h2');
        subHeaderText.textContent = 'Crafted with care. Inspired by classic French patisserie.';
        headerText.textContent = 'Our Menu';

        menuHeader.appendChild(headerText);
        menuHeader.appendChild(subHeaderText);
    }

    const pushIntoMenuItem = (itemName, itemDesc, itemPrice, itemImgPath) => {
        menuItems.push({name: itemName, desc: itemDesc, price: itemPrice, imgPath: itemImgPath});
    }

    const cardMaker = (itemName, itemDesc, itemPrice, itemImgPath) => {
        const card = document.createElement('div');
        card.classList.add('card');

        const img = document.createElement('img');
        img.src = itemImgPath;
        img.alt = itemName;

        const nameCard = document.createElement('h3');
        nameCard.textContent = itemName;

        const desc = document.createElement('p');
        desc.textContent = itemDesc;

        const price = document.createElement('span');
        price.classList.add('price');
        price.textContent = `$${itemPrice.toFixed(2)}`;
        
        card.appendChild(img);
        card.appendChild(nameCard);
        card.appendChild(desc);
        card.appendChild(price);
        return card;
    }

    const cardFactory = () => {
        menuItems.forEach(item => {
            const card = cardMaker(item.name, item.desc, item.price, item.imgPath);
            cardContainer.appendChild(card);
        });
    }

    const resetMenuItems = () => {
        menuItems = [];
    }

    const render = (parent) => {
        parent.innerHTML = '';
        parent.appendChild(container);
        container.appendChild(menuHeader);
        container.appendChild(cardContainer);
    }

    const execute = (parent) => {
        setupDOM();
        inputPreMadeContent();
        cardFactory();
        render(parent);
    }
    return { execute , pushIntoMenuItem, resetMenuItems };
})();   

export { menuPageContent };