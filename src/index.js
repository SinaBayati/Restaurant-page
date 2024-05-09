import "./style.css";

const content = document.querySelector("#content");

const homeContainer = document.createElement("div");
homeContainer.classList.add("home-container");

const p = document.createElement("p");
p.innerText = 
`Welcome to Smoker Palace, your ultimate Minecraft-themed dining experience!
Immerse yourself in the blocky world of Minecraft while savoring delectable dishes.
Our restaurant is a tribute to the game's Smoker block.
Just like in Minecraft, we strive for resourcefulness and creativity in our kitchen, using only the freshest ingredients to craft meals that fuel your adventure.
`;

homeContainer.appendChild(p);
content.appendChild(homeContainer)
