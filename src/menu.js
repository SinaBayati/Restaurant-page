import steakSrc from "./assets/steak.png";
import bakedPotatoSrc from "./assets/baked-potato.png";
import cookedChickenSrc from "./assets/cooked-chicken.png";
import cookedCodSrc from "./assets/cooked-cod.png";
import cookedMuttonSrc from "./assets/cooked-mutton.png";
import cookedPorkchopSrc from "./assets/cooked-porkchop.png";
import cookedRabbitSrc from "./assets/cooked-rabbit.png";
import cookedSalmonSrc from "./assets/cooked-salmon.png";
import driedKelp from "./assets/dried-kelp.png";

export default function(){
  const content = document.querySelector("#content");
  content.innerHTML = null;

  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");

  const steakCard = createMenuCard("Steak",steakSrc,"16");
  const potatoCard = createMenuCard("Baked Potato",bakedPotatoSrc,"10");
  const chickenCard = createMenuCard("Cooked Chicken",cookedChickenSrc,"12");
  const codCard = createMenuCard("Cooked Cod",cookedCodSrc,"10");
  const muttonCard = createMenuCard("Cooked Mutton",cookedMuttonSrc,"12");
  const porkchopCard = createMenuCard("Cooked Porkchop",cookedPorkchopSrc,"16");
  const rabbitCard = createMenuCard("Cooked Rabbit",cookedRabbitSrc,"10");
  const salmonCard = createMenuCard("Cooked Salmon",cookedSalmonSrc,"12");
  const kelpCard = createMenuCard("Dried Kelp",driedKelp,"2");

  menuContainer.append(
    steakCard,
    potatoCard,
    chickenCard,
    codCard,
    muttonCard,
    porkchopCard,
    rabbitCard,
    salmonCard,
    kelpCard
  );

  content.appendChild(menuContainer);
};

function createMenuCard(name,src,price){
  const card = document.createElement("div");
  card.classList.add("card");
  card.dataset.name = name;
  
  const img = new Image();
  img.src = src;

  const title = document.createElement("h2");
  title.textContent = name;

  const priceEl = document.createElement("h3");
  priceEl.textContent = `Price: ${price} Emeralds`;

  card.append(img,title,priceEl);
  return card;
}
