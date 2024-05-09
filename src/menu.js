export default function(){
  const content = document.querySelector("#content");
  content.innerHTML = null;

  // render menu section code

  content.appendChild(homeContainer);
};
