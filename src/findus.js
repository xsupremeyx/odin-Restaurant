const findPageContent = ( () => {
    let container;
    let menuHeader;
    let menuBody;

    const setupDOM = () => {
        container = document.createElement('div');
        container.id = 'find-container';
        menuHeader = document.createElement('div');
        menuHeader.classList.add('find-header');
        menuBody = document.createElement('div');
        menuBody.classList.add('find-body');

    }

    const inputPreMadeContent = (mapImgLocation) => {
        const headerText = document.createElement('h1');
        const subHeaderText = document.createElement('h2');
        headerText.textContent = 'Contact Us';
        subHeaderText.textContent = 'Visit us in the heart of the city, or reach out anytime.';
        menuHeader.appendChild(headerText);
        menuHeader.appendChild(subHeaderText);

        const mapCard = document.createElement('div');
        mapCard.classList.add('map-card');
        const mapImg = document.createElement('img');
        mapImg.src = mapImgLocation;
        mapImg.alt = 'Map to Amélie Patisserie';
        mapCard.appendChild(mapImg);

        const contactCard = document.createElement('div');
        contactCard.classList.add('contact-card');

        const nameCard = document.createElement('h3');
        nameCard.textContent = 'Amélie Patisserie';

        const address = document.createElement('p');
        address.innerHTML = `123 Delight St.<br>Sweet City, SC 45678`;

        const contactDetails = document.createElement('p');
        contactDetails.innerHTML = `Phone: (123) 456-7890<br>Email: hello@gmail.com:`;

        const openingHeader = document.createElement('h4');
        openingHeader.textContent = 'Opening Hours:';

        const openingHours = document.createElement('p');
        openingHours.innerHTML = `Mon-Fri: 8am - 8pm<br>Sat-Sun: 9am - 6pm`;

        contactCard.appendChild(nameCard);
        contactCard.appendChild(address);
        contactCard.appendChild(contactDetails);
        contactCard.appendChild(openingHeader);
        contactCard.appendChild(openingHours);

        menuBody.appendChild(mapCard);
        menuBody.appendChild(contactCard);
    }

    const render = (parent) => {
        parent.innerHTML = '';
        parent.appendChild(container);
        container.appendChild(menuHeader);
        container.appendChild(menuBody);
    }

    const execute = (parent, mapImgLocation) => {
        setupDOM();
        inputPreMadeContent(mapImgLocation);
        render(parent);
    }
    return { execute };
} )();

export { findPageContent };