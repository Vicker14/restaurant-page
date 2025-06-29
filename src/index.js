import "./styles.css";
import homePageLoad from "./pages/home";
import menuPageLoad from "./pages/menu";
import aboutPageLoad from "./pages/about";
import home from "./pages/home";

console.log("Welcome to this amazing restaurant");

const content = document.getElementById("content");

function clearContent() {
    content.innerHTML = "";
}

//=============
// Initial load
//=============
content.appendChild(aboutPageLoad());

//=============
// NavBar eventListeners
//=============
const homeButton = document.getElementById("home");
homeButton.addEventListener("click", () => {
    clearContent();
    content.append(homePageLoad());
})

const menuButton = document.getElementById("menu");
menuButton.addEventListener("click", () => {
    clearContent();
    content.append(menuPageLoad());
})

const aboutButton = document.getElementById("about");
aboutButton.addEventListener("click", () => {
    clearContent();
    content.append(aboutPageLoad());
})