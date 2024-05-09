export default function(){
  const content = document.querySelector("#content");
  content.innerHTML = null;

  const contactContainer = document.createElement("div");
  contactContainer.classList.add("contact-container");

  const title = document.createElement("h2");
  title.textContent = "Address";

  const address = document.createElement("p");
  address.textContent = "234 Emerald Street, Golem Town, Overworld";

  contactContainer.append(title,address);

  content.appendChild(contactContainer);
};
