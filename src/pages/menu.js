import "./menu.css";
import niguiri from "../img/niguiri.png";
import oniguiri from "../img/oniguiri.png";
import ramen from "../img/ramen.png";
import takoyaki from "../img/takoyaki.png";

export default function () {
    const menuGrid = document.createElement("div");
    menuGrid.setAttribute("id", "grid");

    const card1 = document.createElement("div");
    const card2 = document.createElement("div");
    const card3 = document.createElement("div");
    const card4 = document.createElement("div");

    card1.setAttribute("class", "card");
    card2.setAttribute("class", "card");
    card3.setAttribute("class", "card");
    card4.setAttribute("class", "card");

    const title1 = document.createElement("div");
    const title2 = document.createElement("div");
    const title3 = document.createElement("div");
    const title4 = document.createElement("div");

    title1.setAttribute("class", "jpName");
    title2.setAttribute("class", "jpName");
    title3.setAttribute("class", "jpName");
    title4.setAttribute("class", "jpName");



    const niguiriPhoto = document.createElement("img");
    niguiriPhoto.setAttribute("src", niguiri);
    niguiriPhoto.setAttribute("alt", "Niguiri");

    const oniguiriPhoto = document.createElement("img");
    oniguiriPhoto.setAttribute("src", oniguiri);
    oniguiriPhoto.setAttribute("alt", "Oniguiri");

    const ramenPhoto = document.createElement("img");
    ramenPhoto.setAttribute("src", ramen);
    ramenPhoto.setAttribute("alt", "Ramen");

    const takoyakiPhoto = document.createElement("img");
    takoyakiPhoto.setAttribute("src", takoyaki);
    takoyakiPhoto.setAttribute("alt", "Takoyaki");
    


    title1.textContent = "にぎり";
    card1.append(title1, niguiriPhoto);

    title2.textContent = "おにぎり";
    card2.append(title2, oniguiriPhoto);

    title3.textContent = "ラーメン";
    card3.append(title3, ramenPhoto);

    title4.textContent = "たこやき";
    card4.append(title4, takoyakiPhoto);

    menuGrid.append(card1, card2, card3, card4)

    return menuGrid;
}