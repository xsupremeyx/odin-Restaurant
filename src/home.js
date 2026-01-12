const homePageContent = (() => {
    let container;
    let heading;
    let subheading;
    let menuButton;

    const setupDOM = () => {
        container = document.createElement('div');
        container.id = 'main-page-container';

        heading = document.createElement('h1');
        subheading = document.createElement('h2');
        menuButton = document.createElement('button');

        heading.id = 'main-heading';
        subheading.id = 'main-sub-heading';
        menuButton.id = 'main-menu-button';
        menuButton.type = 'button';
    }

    const inputContent = (headingText, subheadingText, buttonText) => {
        heading.textContent = headingText;
        subheading.textContent = subheadingText;
        menuButton.textContent = buttonText;
    }

    const render = (parent) => {
        parent.innerHTML = '';
        parent.appendChild(container);

        container.appendChild(heading);
        container.appendChild(subheading);
        container.appendChild(menuButton);
    }

    const execute = (parent, headingText, subheadingText, buttonText) => {
        setupDOM();
        inputContent(headingText, subheadingText, buttonText);
        render(parent);
    }
    return { execute };
})();

export { homePageContent };