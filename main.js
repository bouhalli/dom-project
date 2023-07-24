var total = document.querySelector(".total-price");
var unitPrice = document.querySelectorAll(".unit-price");
var plusBtns = document.querySelectorAll(".plus-btn");
var minusBtns = document.getElementsByClassName("minus-btn");
var quantities = document.querySelectorAll(".qute");
var removeBtns = document.querySelectorAll(".fa-trash-alt");
var hearts = document.querySelectorAll(".fa-heart");
var cards = document.querySelectorAll(".card");
console.log(cards);

//total price
function totalPrice() {
  let sum = 0;
  for (let j = 0; j < unitPrice.length; j++) {
    sum = sum + unitPrice[j].innerText * quantities[j].innerText;
  }
  total.innerText = sum;
  return total;
}

// incrementation & decrementation
for (let i = 0; i < plusBtns.length; i++) {
  plusBtns[i].addEventListener("click", function () {
    quantities[i].innerText++;
    console.log(total);
    totalPrice();
  });

  minusBtns[i].addEventListener("click", function () {
    if (quantities[i].innerText > 0) {
      quantities[i].innerText--;
    }
    totalPrice();
  });
}

// like & dislike
for (let i = 0; i < hearts.length; i++) {
  hearts[i].addEventListener("click", function () {
    if (hearts[i].style.color !== "red") {
      hearts[i].style.color = "red";
    } else {
      hearts[i].style.color = "black";
    }
  });
}

// remove product
for (let k = 0; k < removeBtns.length; k++) {
  removeBtns[k].addEventListener("click", function () {
    cards[k].remove();
    quantities[k].innerText = 0;
    totalPrice();
  });
}
