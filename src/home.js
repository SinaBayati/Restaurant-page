export default function(){
  const content = document.querySelector("#content");
  content.innerHTML = null;

  const homeContainer = document.createElement("div");
  homeContainer.classList.add("home-container");
  
  const p = document.createElement("p");
  p.innerText = 
  `Welcome to Smoker Palace, the best restaurant in all 3 dimensions!
  We provide the best food for the least amount of emeralds!`;
  
  homeContainer.appendChild(p);

  content.appendChild(homeContainer);
};
