let counter = 0;

document.getElementById("button1").addEventListener("click", function() {
  counter++;
  updateCounter();
  checkCounter();
});

document.getElementById("button2").addEventListener("click", function() {
  counter--;
  updateCounter();
  checkCounter();
});

function checkCounter() {
  if (counter == 5) {
    alert("Complimenti hai appena bevuto il primo litro");
  } else if (counter == 10) {
    alert("Complimenti oggi ti sei idratato");
  }
}

function updateCounter() {
  if (counter < 0) {
    counter = 0;
    alert("impossibile bere sotto i 0 bicchieri");
  } else if (counter > 10) {
    counter = 10;
  } else {
    let elementoOutput = document.getElementById("manda");
    elementoOutput.textContent = "Hai bevuto " + counter + " bicchieri";
  }
}
