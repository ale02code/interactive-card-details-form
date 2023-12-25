"use strict"

const imageContainer = document.getElementById("image-change");
const imageResponsive = document.createElement("img");

if (document.body.clientWidth > 500) {
  imageResponsive.src = "../images/bg-main-desktop.png";
  imageResponsive.alt = "Background Desktop"
  imageContainer.appendChild(imageResponsive);
} else {
  imageResponsive.src = "../images/bg-main-mobile.png"
  imageResponsive.alt = "Background Mobile"
  imageContainer.appendChild(imageResponsive);
}