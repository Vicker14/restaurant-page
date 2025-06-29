import "./about.css";

export default function () {
    const container = document.createElement("div");
    container.setAttribute("id", "container")

    const title = document.createElement("div");
    title.setAttribute("class", "title");
    title.innerHTML = 'について';

    const text = document.createElement("div");
    text.setAttribute("class", "text");
    text.textContent = "Founded in the heart of Tokyo, our restaurant blends traditional Japanese culinary techniques with modern flavors. Inspired by generations of family recipes, we strive to create an authentic dining experience that honors the rich heritage of Japanese cuisine. Join us to enjoy dishes crafted with passion, fresh ingredients, and a deep respect for our roots.";

    container.append(title, text);
    
    return container;
}