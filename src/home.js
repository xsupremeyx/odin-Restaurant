const homePageContent = (() => {
    let heading;
    let subheading;
    let menuButton;

    const setupDOM = () => {
        heading = document.createElement('h1');
        subheading = document.createElement('h2');
        menuButton = document.createElement('button');
        menuButton.id = 'menu-button';
        menuButton.type = 'button';
    }

    const inputContent = (headingText, subheadingText, buttonText) => {
        heading.textContent = headingText;
        subheading.textContent = subheadingText;
        menuButton.textContent = buttonText;
    }

    const render = (parent) => {
        parent.innerHTML = '';
        parent.appendChild(heading);
        parent.appendChild(subheading);
        parent.appendChild(menuButton);
    }

    const execute = (parent, headingText, subheadingText, buttonText) => {
        setupDOM();
        inputContent(headingText, subheadingText, buttonText);
        render(parent);
    }
    return { execute };
})();

export { homePageContent };