const tilcolculater = document.getElementById('CalculaterBtn');
tilcolculater.addEventListener("click", claculateTip);

function claculateTip() {
  const billamount = document.getElementById("billAmount");
  const servesrating = document.getElementById("servesrating");
  const splitecount = document.getElementById("splitecount");
  const mealetype = document.getElementById("mealetype");


  const tipamout = document.getElementById("tipamout");
  const totalamoutn = document.getElementById("totalamoutn");
  const amountPerPerson = document.getElementById("amountPerPerson");

  const billAmountrate = parseFloat(billamount.value);
  const servesratingrate = parseFloat(servesrating.value);
  const splitecountrate = parseFloat(splitecount.value);
  const mealetyperate = mealetype.value;

  if (isNaN(billAmountrate) || isNaN(servesratingrate) || isNaN(splitecountrate)) {
    tipamout.textContent = "Please Enter A Valid Number";
    totalamoutn.textContent = "";
    amountPerPerson.textContent = "";

    return;


  }

  let tip;
  switch (servesrating) {
    case 1:
      tip = billamount * 0.05;
      break;
    case 2:
      tip = billamount * 0.10;
      break;
    case 3:
      tip = billamount * 0.15;
      break;
    case 4:
      tip = billamount * 0.20;
      break;


  }


  let totalAmountVar = billamount + tip;
  let amountPerPersonvar = totalAmountVar / splitecountrate;

  if (mealetyperate === "dinner") {
    tip += 5;
    totalAmountVar += 5;
    amountPerPersonvar += 5;
  }

  tipamout.textContent = `Tip :$${tip.toFixed(2)}`;
  totalamoutn.textContent = `Total : $${tip.toFixed(2)}`;
  amountPerPerson.textContent = `Amount per Person: $${tip.toFixed(2)}`;


}