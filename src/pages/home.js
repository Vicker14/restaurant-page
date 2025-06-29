import "./home.css";

export default function () {
    const homePanel = document.createElement("div");
    homePanel.setAttribute("id", "container");

    // ===============
    // Description
    // ===============
    const description = document.createElement("div");
    description.setAttribute("class", "description");

    const mainDescription = document.createElement("div");
    mainDescription.setAttribute("class", "mainDescription");
    mainDescription.textContent = "This is a japanesse restaurant";

    const subDescription = document.createElement("div");
    subDescription.setAttribute("class", "subDescription");
    subDescription.textContent = "これは日本食レストランです";

    description.append(mainDescription, subDescription);

    // ===============
    // Welcome
    // ===============
    const welcome = document.createElement("div");
    welcome.setAttribute("class", "welcome");

    const welcomeText = document.createElement("div");
    welcomeText.setAttribute("class", "mainWelcome");
    welcomeText.textContent = "日本食";

    const subWelcomeText = document.createElement("div");
    subWelcomeText.setAttribute("class", "subWelcome");
    subWelcomeText.textContent = "いらっしゃいませ";

    welcome.append(welcomeText, subWelcomeText);
    
    // ===============
    // Circle
    // ===============
    // 1) Crea el nodo <svg> en el espacio de nombres SVG
    const svgNS = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("width", 100);
    svg.setAttribute("height", 100);

    // 2) Crea el círculo rojo
    const circle = document.createElementNS(svgNS, "circle");
    circle.setAttribute("cx", 50);   // centro X
    circle.setAttribute("cy", 50);   // centro Y
    circle.setAttribute("r",  100);   // radio
    circle.setAttribute("fill", "var(--color-accent)");
    circle.setAttribute("class", "svg-circle");

    // 3) Inserta el círculo dentro del <svg>
    svg.appendChild(circle);
    welcome.append(svg);

    // ===============
    // Return
    // ===============
    homePanel.append(description, welcome);
    return homePanel;
}