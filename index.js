
// get elements
const billInput = document.getElementById("theBill1");
const tipButtons = document.querySelectorAll("#btnTips button");
const customTipInput = document.getElementById("myCustom");
const numOfPeopleInput = document.getElementById("theNumber1");
const tipAmountOutput = document.getElementById("tipAmount");
const totalAmountOutput = document.querySelector(".totalDiv output");
const resetButton = document.getElementById("resetBtn");

// add event listeners
billInput.addEventListener("input", calculateTip);
tipButtons.forEach(button => button.addEventListener("click", calculateTip));
customTipInput.addEventListener("input", calculateTip);
numOfPeopleInput.addEventListener("input", calculateTip);
resetButton.addEventListener("click", resetCalculator);

// define functions
function calculateTip() {
  // get input values
  const billAmount = parseFloat(billInput.value);
  const tipPercent = getTipPercent();
  const customTip = parseFloat(customTipInput.value);
  const numOfPeople = parseInt(numOfPeopleInput.value);
  
  // calculate tip amount and total amount per person
  let tipAmount = 0;
  let totalAmount = 0;
  if (billAmount && tipPercent && numOfPeople) {
    if (customTip) {
      tipAmount = customTip * billAmount / 100 / numOfPeople;
    } else {
      tipAmount = tipPercent * billAmount / 100 / numOfPeople;
    }
    totalAmount = (billAmount + tipAmount) / numOfPeople;
  }
  
  // display results
  tipAmountOutput.innerText = `$${tipAmount.toFixed(2)}`;
  totalAmountOutput.innerText = `$${totalAmount.toFixed(2)}`;
}

function getTipPercent() {
  let tipPercent = 0;
  tipButtons.forEach(button => {
    if (button.checked) {
      tipPercent = parseInt(button.value);
    }
  });
  return tipPercent;
}

function resetCalculator() {
  billInput.value = "";
  tipButtons[2].checked = true;
  customTipInput.value = "";
  numOfPeopleInput.value = "";
  tipAmountOutput.innerText = "$0.00";
  totalAmountOutput.innerText = "$0.00";
}

