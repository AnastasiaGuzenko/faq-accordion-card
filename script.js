let acc = document.getElementsByClassName("accordion__btn");
let accIndex;

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    if (accIndex == i) {
      accIndex = null
    } else {
      accIndex = i
    }
    changeDisplaySiblingElement()
  });
}

function changeDisplaySiblingElement() {
  for (let i = 0; i < acc.length; i++) {
    let panel =  acc[i].nextElementSibling;
    if (i == accIndex) {
      panel.style.display = "block";
      acc[i].classList.add('active')

    } else {
      panel.style.display = "none";
      acc[i].classList.remove('active')
    }
  }
};