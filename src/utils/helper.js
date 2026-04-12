export function calculateTip(bill, activeTip, customTip, quantity, tipAmount) {
  let activeTipVal = parseFloat(activeTip) / 100.00;
  let customTipVal = parseFloat(customTip) / 100.00;
  
  if (!quantity) {
    tipAmount = 0;
  } else if (quantity === 0) {
    tipAmount = 0;
  } else if (activeTip === 0 && customTip === '') {
    tipAmount = 0;
  } else if (activeTip === 0) {
    tipAmount = (bill * customTipVal) / quantity;
  } else {
    tipAmount = (bill * activeTipVal) / quantity;
  }

  return tipAmount.toFixed(2);
}

export function calculateTotal(bill, quantity, tipAmount, total) {
  if (bill === 0) {
    total = 0;
  } else if (quantity === 0 || (!quantity)) {
    total = 0;
  } else {
    total = (bill / quantity) + tipAmount;
  }

  return total.toFixed(2);
}