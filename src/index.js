import "./style.css";
import renderHome from "./home";
import renderMenu from './menu';
import renderContact from './contact';

const homeBtn = document.querySelector("#home");
const menuBtn = document.querySelector("#menu");
const contactBtn = document.querySelector("#contact");

window.addEventListener("load",renderHome);
homeBtn.addEventListener("click",renderHome);
menuBtn.addEventListener("click",renderMenu);
contactBtn.addEventListener("click",renderContact);