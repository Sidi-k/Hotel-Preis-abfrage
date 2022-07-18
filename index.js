const pricePerNight = 50;
const personExtra = 10;
const breakfastPrice = 8;

function run() {
  const nacht = document.querySelector("#nacht").value;
  const guest = document.querySelector("#guest").value;
  const withBreakfast = document.querySelector("#breakfast").checked;

  document.querySelector("#price").innerHTML="Dein Preis "+ calc (nacht,guest,withBreakfast)+" Euro";
}

function calc(nacht, guest, withBreakfast) {
    let price = (pricePerNight + personExtra * (guest - 1))*nacht;
    if (withBreakfast ==true) {
        price =price+breakfastPrice*guest*nacht;
    } else {
        price       
    }
    return price;
}


// function calc(nacht, guest, withBreakfast) {
//   let price = pricePerNight * nacht + personExtra * (guest - 1);
//   withBreakfast ? (price += breakfastPrice * guest) : price;
//   return price;
// }
