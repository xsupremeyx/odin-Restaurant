import "./styles.css";
import { homePageContent } from "./home.js";
import { menuPageContent } from "./menu.js";
import { findPageContent } from "./findus.js";

// Importing images
import croissantImg from './assets/images/croissant.webp';
import macaronsImg from './assets/images/macarons.webp';
import eclairImg from './assets/images/eclair.webp';
import tarteImg from './assets/images/tarte.webp';
import millefeuilleImg from './assets/images/millefeuille.webp';
import cheesecakeImg from './assets/images/cheesecake.webp';
import mapImg from './assets/images/map.webp';



const navPageController = (() => {

    let homeBtn;
    let menuBtn;
    let goToMenuBtn;
    let findBtn;
    let contentDiv;
    let state = 'home';

    const cacheDOM = () => {
        homeBtn = document.getElementById('homeBtn');
        menuBtn = document.getElementById('menuBtn');
        findBtn = document.getElementById('findBtn');
        contentDiv = document.getElementById('content');
    }

    const attachEventListeners = () => {
        homeBtn.addEventListener('click', renderHomePage);
        menuBtn.addEventListener('click', renderMenuPage);
        findBtn.addEventListener('click', renderFindUsPage);
    }

    const preloadAssets = () => {
        new Image().src = croissantImg;
        new Image().src = macaronsImg;
        new Image().src = eclairImg;
        new Image().src = tarteImg;
        new Image().src = millefeuilleImg;
        new Image().src = cheesecakeImg;
        new Image().src = mapImg;
    }


    const renderMenuPage = () => {
        state = 'menu';
        menuPageContent.resetMenuItems();
        menuPageContent.pushIntoMenuItem('Croissant', 'Flaky, buttery pastry perfect for breakfast.', 3.00, croissantImg);

        menuPageContent.pushIntoMenuItem('Macarons', 'Colorful almond meringue cookies with creamy filling.', 2.75, macaronsImg);

        menuPageContent.pushIntoMenuItem('Éclair', 'Choux pastry filled with cream and topped with chocolate.', 4.00, eclairImg);

        menuPageContent.pushIntoMenuItem('Fruit Tart', 'Buttery crust filled with custard and topped with fresh fruit.', 5.00, tarteImg);

        menuPageContent.pushIntoMenuItem('Mille-Feuille', 'Layers of puff pastry and pastry cream, dusted with powdered sugar.', 4.50, millefeuilleImg);

        menuPageContent.pushIntoMenuItem('Cheese Cake', 'Creamy cheesecake with a graham cracker crust.', 4.00, cheesecakeImg);

        menuPageContent.execute(contentDiv);
    }

    const renderHomePage = () => {
        state = 'home';
        homePageContent.execute(contentDiv, 'Amélie', 'A French-inspired patisserie for everyday charm.', 'Explore Our Menu');
        goToMenuBtn = document.getElementById('main-menu-button');
        goToMenuBtn.addEventListener('click', renderMenuPage);
    }

    const renderFindUsPage = () => {
        state = 'findus';
        findPageContent.execute(contentDiv, mapImg);
    }

    const initialize = () => {
        cacheDOM();
        preloadAssets();
        attachEventListeners();
        renderHomePage();
    }

    return { initialize, renderMenuPage, renderHomePage, renderFindUsPage };

})();


// navPageController.renderMenuPage();
// navPageController.renderHomePage();
// navPageController.renderFindUsPage();

navPageController.initialize();