import "./styles.css";
import { homePageContent } from "./home.js";

const contentDiv = document.getElementById('content');
homePageContent.execute(contentDiv, 'Amélie', 'A French-inspired patisserie for everyday charm.','Explore Our Menu');