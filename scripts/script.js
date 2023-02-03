//open popup
const popup = document.getElementById("hint");
popup.addEventListener("click", () => {
  document.getElementById("popup-area").innerHTML = popup;
  document.getElementById("popup-area").style.opacity = "1";
});

//hide popup
const toggle = () => {
  const popuparea = document.getElementsByClassName("pop-up-box");
  document.getElementById("popup-area").style.opacity = "0";
    //remove the element after it has been faded out
    area.addEventListener("transitionend", () => area.remove());
};


//add validation functionality here for qmul emails only

