// bu satırı silmeyin
import { siteContent } from "./content.js";
console.log("Site içeriği", siteContent);

/* Kodlar buradan aşağıya */
document.getElementById("logo-img").src = siteContent.images["logo-img"];

const navItems = document.querySelectorAll("nav a");
const navTexts = siteContent.nav;
for (let i = 0; i < navItems.length; i++) {
  navItems[i].textContent = navTexts[`nav-item-${i + 1}`];
  navItems[i].classList.add("italic");
}

document.querySelector(".cta-text h1").textContent = siteContent.cta.h1;
document.querySelector(".cta-text button").textContent = siteContent.cta.button;
document.getElementById("cta-img").src = siteContent.images["cta-img"];

const topContents = document.querySelectorAll(".top-content .text-content");
topContents[0].querySelector("h4").textContent = siteContent["top-content"]["left-h4"];
topContents[0].querySelector("p").textContent = siteContent["top-content"]["left-content"];
topContents[1].querySelector("h4").textContent = siteContent["top-content"]["right-h4"];
topContents[1].querySelector("p").textContent = siteContent["top-content"]["right-content"];

document.getElementById("middle-img").src = siteContent.images["accent-img"];

const bottomContents = document.querySelectorAll(".bottom-content .text-content");
bottomContents[0].querySelector("h4").textContent = siteContent["bottom-content"]["left-h4"];
bottomContents[0].querySelector("p").textContent = siteContent["bottom-content"]["left-content"];
bottomContents[1].querySelector("h4").textContent = siteContent["bottom-content"]["middle-h4"];
bottomContents[1].querySelector("p").textContent = siteContent["bottom-content"]["middle-content"];
bottomContents[2].querySelector("h4").textContent = siteContent["bottom-content"]["right-h4"];
bottomContents[2].querySelector("p").textContent = siteContent["bottom-content"]["right-content"];


const contact = document.querySelector(".contact");
contact.querySelector("h4").textContent = siteContent.contact["contact-h4"];
const contactPs = contact.querySelectorAll("p");
contactPs[0].textContent = siteContent.contact.address;
contactPs[1].textContent = siteContent.contact.phone;
contactPs[2].textContent = siteContent.contact.email;


const footerLink = document.querySelector("footer a");
footerLink.textContent = siteContent.footer.copyright;
footerLink.classList.add("bold");