import "./styles.css";
import { loadHomeContent } from "./home";
import { loadMenuContent } from "./menu";

console.log('%c Start of script', 'font-weight:900; color: darkgreen;')

const contentDiv = document.getElementById('content');

function emptyContent() {
    while(contentDiv.firstChild) {
        contentDiv.removeChild(contentDiv.firstChild);
    }
}

/* loadHomeContent(); */

// HOME CONTENT
const homeBtn = document.getElementById('home');
homeBtn.addEventListener('click', () => {
    emptyContent();
    loadHomeContent();
})

// MENU CONTENT
const menuBtn = document.getElementById('menu');
menuBtn.addEventListener('click', () => {
    emptyContent();
    loadMenuContent();
})

