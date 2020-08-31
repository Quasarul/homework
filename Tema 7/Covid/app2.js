class App {
  // Read persons data
  readData = () => {
    // Request with fetch api
    fetch("persons.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        data.persoane.forEach((persoana) => {
          getDomElement("tbody").innerHTML += `<tr>
                        <td>${persoana.id}</td>
                        <td>${persoana.nume_prenume}</td>
                        <td>${persoana.adresa}</td>
                        <td>${persoana.oras}</td>
                        <td>${persoana.judet}</td>
                        <td>${persoana.varsta}</td>
                        <td>${persoana.resultat_testare}</td>
                    </tr>`;
        });
      });

    // Request with ajax api
    // let xmlhttp = new XMLHttpRequest();
    // let persons = "";
    // xmlhttp.onreadystatechange = function () {
    //   if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
    //     persons = JSON.parse(xmlhttp.responseText);
    //     persons.persoane.forEach((persoana) => {
    //       getDomElement("tbody").innerHTML += `<tr>
    //                       <td>${persoana.id}</td>
    //                       <td>${persoana.nume_prenume}</td>
    //                       <td>${persoana.adresa}</td>
    //                       <td>${persoana.oras}</td>
    //                       <td>${persoana.judet}</td>
    //                       <td>${persoana.varsta}</td>
    //                       <td>${persoana.resultat_testare}</td>
    //                   </tr>`;
    //     });
    //   }
    // };
    // xmlhttp.open("GET", "persons.json", true);
    // xmlhttp.send();
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

  // Varsta medie a tuturor persoanelor testate
  calulateAverageAge = () => {
    let totalNrPers = 0,
      totalAge = 0,
      averageAge;
    fetch("persons.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        totalNrPers = parseInt(data.persoane.length);
        totalNrPers = parseInt(totalNrPers);
        data.persoane.forEach((persoana) => {
          totalAge += parseInt(persoana.varsta);
        });
        averageAge = totalAge / parseInt(totalNrPers);
        getDomElement("#result").innerHTML =
          "Varsta medie a tuturor persoanelor testate este " + averageAge;
      });
  };

  //  Varsta medie a  persoanelor testate pozitiv
  calculateAvgPosAge = () => {
    let totalAge = 0,
      count = 0,
      averageAge = 0;
    fetch("persons.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        data.persoane.forEach((persoana) => {
          if (persoana.resultat_testare == "pozitiv") {
            totalAge += parseInt(persoana.varsta);
            ++count;
          }
        });
        averageAge = totalAge / parseInt(count);
        getDomElement("#result").innerHTML =
          "Varsta medie a persoanelor testate pozitiv este " +
          averageAge.toFixed(2);
      });
  };

  // Numele judetului cu cele mai multe cazuri pozitive
  calculateNumeJudPoz = () => {
    let numeJudet = [],
      count = 0;
    fetch("persons.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        data.persoane.forEach((persoana) => {
          if (persoana.resultat_testare == "pozitiv") {
            numeJudet.push(persoana.judet);
            ++count;
          }
        });
        let judMap = [],
          judet = numeJudet[0],
          maxCount = 1;
        for (let i = 0; i < numeJudet.length; i++) {
          var el = numeJudet[i];
          if (judMap[el] == null) judMap[el] = 1;
          else judMap[el]++;
          if (judMap[el] > maxCount) {
            judet = el + " ";
            maxCount = judMap[el];
          } else if (judMap[el] == maxCount) {
            judet += el + " ";
            maxCount = judMap[el];
          }
        }
        getDomElement("#result").innerHTML =
          "Numele judetului cu cele mai multe cazuri pozitive este " + judet;
      });
  };

  /// Numele judetului cu cele mai multe cazuri negative
  calculateNumeJudNeg = () => {
    let numeJudet = [],
      count = 0;
    fetch("persons.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        data.persoane.forEach((persoana) => {
          if (persoana.resultat_testare == "negativ") {
            numeJudet.push(persoana.judet);
            ++count;
          }
        });
        let judMap = [],
          judet = numeJudet[0],
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
        getDomElement("#result").innerHTML =
          "Numele judetului cu cele mai multe cazuri negative este " + judet;
      });
  };

  // Numele judetului cu cele mai putine cazuri pozitive
  calculateNumeJudPozPutine = () => {
    let numeJudet = [],
      count = 0;
    fetch("persons.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        data.persoane.forEach((persoana) => {
          if (persoana.resultat_testare == "pozitiv") {
            numeJudet.push(persoana.judet);
            ++count;
          }
        });
        let judMap = [],
          judet = numeJudet[0],
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
        getDomElement("#result").innerHTML =
          "Numele judetului cu cele mai multe cazuri pozitive este " + judet;
      });
  };

  // Numele judetului cu cele mai putine cazuri negative
  calculateNumeJudNegPutine = () => {
    let numeJudet = [],
      count = 0;
    fetch("persons.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        data.persoane.forEach((persoana) => {
          if (persoana.resultat_testare == "negativ") {
            numeJudet.push(persoana.judet);
            ++count;
          }
        });
        let judMap = [],
          judet = numeJudet[0],
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
        getDomElement("#result").innerHTML =
          "Numele judetului cu cele mai putine cazuri negative este " + judet;
      });
  };

  // Clear input
  clearData = () => {
    this.getDomElement("tbody").innerHTML = "";
  };
}

// Get specific dom element
getDomElement = (element) => document.querySelector(element);

let app = new App();
// Initiate app
(function init() {
  app.readData();
})();

const button = getDomElement("button");
button.onclick = function () {
  const id_nr = getDomElement("#id_nr");
  const nume_prenume = getDomElement("#nume_pren");
  const adresa = getDomElement("#adresa");
  const oras = getDomElement("#oras");
  const judet = getDomElement("#judet");
  const varsta = getDomElement("#varsta");
  const rez_test = getDomElement("#rez_test");
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

getDomElement("#variante").onchange = function () {
  switch (getDomElement("#variante").value) {
    case "varsta medie a tuturor persoanelor testate":
      getDomElement("#result").innerHTML =
        "Varsta medie a tuturor persoanelor testate este " +
        app.calulateAverageAge();
      break;
    case "varsta medie a persoanelor testate pozitiv":
      getDomElement("#result").innerHTML =
        "Varsta medie a persoanelor testate pozitiv este " +
        app.calculateAvgPosAge();
      break;
    case "numele judetului cu cele mai multe cazuri pozitive":
      getDomElement("#result").innerHTML =
        "Numele judetului cu cele mai multe cazuri pozitive este " +
        app.calculateNumeJudPoz();
      break;
    case "numele judetului cu cele mai multe cazuri negative":
      getDomElement("#result").innerHTML =
        "Numele judetului cu cele mai multe cazuri negative este " +
        app.calculateNumeJudNeg();
      break;
    case "numele judetului cu cele mai putine cazuri pozitive":
      getDomElement("#result").innerHTML =
        "Numele judetului cu cele mai putine cazuri pozitive este " +
        app.calculateNumeJudPozPutine();
      break;
    case "numele judetului cu cele mai putine cazuri negative":
      getDomElement("#result").innerHTML =
        "Numele judetului cu cele mai putine cazuri negative este " +
        app.calculateNumeJudNegPutine();
      break;
    default:
      getDomElement("#result").innerHTML = "";
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
