import "./styles.css";
import { homePageContent } from "./home.js";
import { menuPageContent } from "./menu.js";
import { findPageContent } from "./findus.js";

// Importing images
import croissantImg from './assets/images/croissant.jpg';
import macaronsImg from './assets/images/macarons.jpg';
import eclairImg from './assets/images/eclair.jpg';
import tarteImg from './assets/images/tarte.jpg';
import millefeuilleImg from './assets/images/millefeuille.jpg';
import cheesecakeImg from './assets/images/cheesecake.jpg';
import mapImg from './assets/images/map.png';



const navPageController = (() => {
    const contentDiv = document.getElementById('content');
    const renderMenuPage = () => {
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
        homePageContent.execute(contentDiv, 'Amélie', 'A French-inspired patisserie for everyday charm.', 'Explore Our Menu');
    }

    const renderFindUsPage = () => {
        findPageContent.execute(contentDiv, mapImg);
    }

    return { renderMenuPage, renderHomePage, renderFindUsPage };

})();


// navPageController.renderMenuPage();
// navPageController.renderHomePage();
navPageController.renderFindUsPage();

  
