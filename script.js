document.getElementById("tipForm").addEventListener("input", calculateTip);

const conversionRates = { USD: 1, INR: 84.07, JPY: 149.34 };

function calculateTip() {
  const billTotal = parseFloat(document.getElementById("billTotal").value);
  const tipPercentage = parseFloat(document.getElementById("tipPercentage").value);
  const currency = document.getElementById("currency").value;
  
  // Display the tip percentage
  document.getElementById("tipPercentDisplay").textContent = `${tipPercentage}%`;
  
  // Validate bill amount
  if (isNaN(billTotal) || billTotal < 0) {
    document.getElementById("errorMessage").textContent = "Please enter a valid positive number.";
    return;
  } else {
    document.getElementById("errorMessage").textContent = "";
  }

  // Calculate tip amount and total with tip
  let tipAmount = (billTotal * tipPercentage) / 100;
  let totalWithTip = billTotal + tipAmount;

  // Convert values based on selected currency
  tipAmount *= conversionRates[currency];
  totalWithTip *= conversionRates[currency];

  // Display results with two decimal places
  document.getElementById("tipAmount").value = tipAmount.toFixed(2);
  document.getElementById("totalWithTip").value = totalWithTip.toFixed(2);
}

function updateTipPercentageDisplay() {
  const tipPercentage = document.getElementById("tipPercentage").value;
  document.getElementById("tipPercentDisplay").textContent = tipPercentage + "%";
}
