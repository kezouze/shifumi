var choice = new Number;
var choiceOrdi = new Number;
var victoryCount = 0;
var defeatCount = 0;
var equalCount = 0;

  function test(choix) {
    choice = choix;
    getRandomInt();
    compare();
  }

  function getRandomInt() {

    choiceOrdi = Math.floor(Math.random() * 3);

    if (choiceOrdi == 0) {
      document.getElementById("choiceOrdi").innerHTML =
        "<img alt='pierre' class='images' src='icones/pierre.png'>";
    } else if (choiceOrdi == 1) {
      document.getElementById("choiceOrdi").innerHTML =
        "<img alt='feuille' class='images' src='icones/feuille.png'>";
    } else if (choiceOrdi == 2) {
      document.getElementById("choiceOrdi").innerHTML =
        "<img alt='ciseaux' class='images' src='icones/ciseaux.png'>";
    }
  }

  function compare() {

    if (choice == choiceOrdi) {
      document.getElementById("resultat").innerHTML = "<h1>Égalité</h1>";
      document.getElementById('equal').innerHTML = equalCount +=1;
    }
    else if ((choice == 0 && choiceOrdi == 2) ||
      (choice == 1 && choiceOrdi == 0) ||
      (choice == 2 && choiceOrdi == 1)) {
      document.getElementById("resultat").innerHTML = "<h1>Victoire ! :D</h1>";
      document.getElementById('victory').innerHTML = victoryCount += 1;
    }
    else if ((choiceOrdi == 0 && choice == 2) ||
      (choiceOrdi == 1 && choice == 0) ||
      (choiceOrdi == 2 && choice == 1)) {
      document.getElementById("resultat").innerHTML = "<h1>Perdu ! :(</h1>";
      document.getElementById('defeat').innerHTML = defeatCount += 1;
    }
  }