import "./style.css";
import renderHome from "./home";
import renderMenu from './menu';
import renderContact from './contact';

const homeBtn = document.querySelector("#home");
const menuBtn = document.querySelector("#menu");
const contactBtn = document.querySelector("#contact");

function setActive(btn){
  homeBtn.classList.remove("active");
  menuBtn.classList.remove("active");
  contactBtn.classList.remove("active");

  btn.classList.add("active");
}

window.addEventListener("load",function(){
  menuBtn.classList.remove("active");
  contactBtn.classList.remove("active");
  homeBtn.classList.add("active");
  renderHome();
});
homeBtn.addEventListener("click",function(e){
  setActive(e.target);
  renderHome();
});
menuBtn.addEventListener("click",function(e){
  setActive(e.target);
  renderMenu();
});
contactBtn.addEventListener("click",function(e){
  setActive(e.target);
  renderContact();
});
