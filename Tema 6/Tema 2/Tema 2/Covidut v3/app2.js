class App {
  constructor() {
    // Create a dummy persons object array
    this.persoane = [
      {
        id: 1,
        nume_prenume: "Popescu Ion",
        adresa: "str. Decebal, nr.10",
        oras: "Craiova",
        judet: "Dolj",
        varsta: 45,
        resultat_testare: "pozitiv",
      },
      {
        id: 2,
        nume_prenume: "Neasca Cosmin",
        adresa: "str. Decebal, nr.10",
        oras: "Tmisoara",
        judet: "Timis",
        varsta: 30,
        resultat_testare: "negativ",
      },
      {
        id: 3,
        nume_prenume: "Tomescu Lucian",
        adresa: "str. Decebal, nr.10",
        oras: "Iasi",
        judet: "Iasi",
        varsta: 25,
        resultat_testare: "pozitiv",
      },
      {
        id: 4,
        nume_prenume: "Tomescu Lucian",
        adresa: "str. Decebal, nr.10",
        oras: "Iasi",
        judet: "Iasi",
        varsta: 25,
        resultat_testare: "negativ",
      },
      {
        id: 5,
        nume_prenume: "Tomescu Lucian",
        adresa: "str. Decebal, nr.10",
        oras: "Iasi",
        judet: "Iasi",
        varsta: 25,
        resultat_testare: "pozitiv",
      },
    ];
  }

  // Read persons data
  readData = () => {
    this.persoane.forEach((persoana, pos) => {
      this.getDomElement("tbody").innerHTML += `<tr>
                    <td>${persoana.id}</td>
                    <td>${persoana.nume_prenume}</td>
                    <td>${persoana.adresa}</td>
                    <td>${persoana.oras}</td>
                    <td>${persoana.judet}</td>
                    <td>${persoana.varsta}</td>
                    <td>${persoana.resultat_testare}</td>
                </tr>`;
    });
  };

  // Add data
  addData = (
    id,
    nume_prenume,
    adresa,
    oras,
    judet,
    varsta,
    resultat_testare
  ) => {
    this.clearData();
    this.persoane.push({
      id: id,
      nume_prenume: nume_prenume,
      adresa: adresa,
      oras: oras,
      judet: judet,
      varsta: varsta,
      resultat_testare: resultat_testare,
    });
    this.readData();
  };

  // varsta medie a tuturor persoanelor testate
  calulateAverageAge = () => {
    let totalNrPers = 0,
      totalAge = 0;
    totalNrPers = this.persoane.length;
    this.persoane.forEach((persoana) => {
      totalAge += parseInt(persoana.varsta);
    });
    let averageAge = totalAge / totalNrPers;
    return averageAge;
  };

  //  varsta medie a  persoanelor testate pozitiv
  calculateAvgPosAge = () => {
    let totalAge = 0;
    let count = 0;
    this.persoane.forEach((persoana) => {
      if (persoana.resultat_testare == "pozitiv") {
        totalAge += parseInt(persoana.varsta);
        ++count;
      }
    });
    let averageAge = totalAge / count;
    console.log(count);
    return averageAge;
  };

  // numele judetului cu cele mai multe cazuri pozitive
  calculateNumeJudPoz = () => {
    let numeJudet = [];
    let count = 0;

    this.persoane.forEach((persoana) => {
      if (persoana.resultat_testare == "pozitiv") {
        numeJudet.push(persoana.judet);
        ++count;
      }
    });

    let judMap = [];
    let judet = numeJudet[0],
      maxCount = 1;
    for (let i = 0; i < numeJudet.length; i++) {
      var el = numeJudet[i];
      if (judMap[el] == null) judMap[el] = 1;
      else judMap[el]++;
      if (judMap[el] > maxCount) {
        judet = el;
        maxCount = judMap[el];
      } else if (judMap[el] == maxCount) {
        judet += el;
        maxCount = judMap[el] + ",";
      }
    }
    return judet;
  };

  /// numele judetului cu cele mai multe cazuri negative
  calculateNumeJudNeg = () => {
    let numeJudet = [];
    let count = 0;

    this.persoane.forEach((persoana) => {
      if (persoana.resultat_testare == "negativ") {
        numeJudet.push(persoana.judet);
        ++count;
      }
    });

    let judMap = [];
    let judet = numeJudet[0],
      maxCount = 1;
    for (let i = 0; i < numeJudet.length; i++) {
      var el = numeJudet[i];
      if (judMap[el] == null) judMap[el] = 1;
      else judMap[el]++;
      if (judMap[el] > maxCount) {
        judet = el;
        maxCount = judMap[el];
      }
    }
    return judet;
  };

  // numele judetului cu cele mai putine cazuri pozitive
  calculateNumeJudPozPutine = () => {
    let numeJudet = [];
    let count = 0;

    this.persoane.forEach((persoana) => {
      if (persoana.resultat_testare == "pozitiv") {
        numeJudet.push(persoana.judet);
        ++count;
      }
    });

    let judMap = [];
    let judet = numeJudet[0],
      maxCount = 1;
    for (let i = 0; i < numeJudet.length; i++) {
      var el = numeJudet[i];
      if (judMap[el] == null) judMap[el] = 1;
      else judMap[el]--;
      if (judMap[el] > maxCount) {
        judet = el;
        maxCount = judMap[el];
      }
    }
    return judet;
  };

  // numele judetului cu cele mai putine cazuri negative
  calculateNumeJudNegPutine = () => {
    let numeJudet = [];
    let count = 0;

    this.persoane.forEach((persoana) => {
      if (persoana.resultat_testare == "negativ") {
        numeJudet.push(persoana.judet);
        ++count;
      }
    });

    let judMap = [];
    let judet = numeJudet[0],
      maxCount = 1;
    for (let i = 0; i < numeJudet.length; i++) {
      var el = numeJudet[i];
      if (judMap[el] == null) judMap[el] = 1;
      else judMap[el]--;
      if (judMap[el] > maxCount) {
        judet = el;
        maxCount = judMap[el];
      }
    }
    return judet;
  };

  // Clear input
  clearData = () => {
    this.getDomElement("tbody").innerHTML = "";
  };

  // Get specific dom element
  getDomElement = (element) => document.querySelector(element);
}

let app = new App();
// Initiate app
(function init() {
  app.readData();
})();

const button = app.getDomElement("button");
button.onclick = function () {
  const id_nr = app.getDomElement("#id_nr");
  const nume_prenume = app.getDomElement("#nume_pren");
  const adresa = app.getDomElement("#adresa");
  const oras = app.getDomElement("#oras");
  const judet = app.getDomElement("#judet");
  const varsta = app.getDomElement("#varsta");
  const rez_test = app.getDomElement("#rez_test");
  app.addData(
    ++id_nr.value,
    nume_prenume.value,
    adresa.value,
    oras.value,
    judet.value,
    varsta.value,
    rez_test.value
  );

  // Scroll back top
  window.scrollTo({ top: 0, behavior: "smooth" });
};

app.getDomElement("#variante").onchange = function () {
  switch (app.getDomElement("#variante").value) {
    case "varsta medie a tuturor persoanelor testate":
      app.getDomElement("#result").innerHTML =
        "Varsta medie a tuturor persoanelor testate este " +
        app.calulateAverageAge();
      break;
    case "varsta medie a persoanelor testate pozitiv":
      app.getDomElement("#result").innerHTML =
        "Varsta medie a persoanelor testate pozitiv este " +
        app.calculateAvgPosAge();
      break;
    case "numele judetului cu cele mai multe cazuri pozitive":
      app.getDomElement("#result").innerHTML =
        "Numele judetului cu cele mai multe cazuri pozitive este " +
        app.calculateNumeJudPoz();
      break;
    case "numele judetului cu cele mai multe cazuri negative":
      app.getDomElement("#result").innerHTML =
        "Numele judetului cu cele mai multe cazuri negative este " +
        app.calculateNumeJudNeg();
      break;
    case "numele judetului cu cele mai putine cazuri pozitive":
      app.getDomElement("#result").innerHTML =
        "Numele judetului cu cele mai putine cazuri pozitive este " +
        app.calculateNumeJudPozPutine();
      break;
    case "numele judetului cu cele mai putine cazuri negative":
      app.getDomElement("#result").innerHTML =
        "Numele judetului cu cele mai putine cazuri negative este " +
        app.calculateNumeJudNegPutine();
      break;
    default:
      app.getDomElement("#result").innerHTML = "";
  }
};

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
