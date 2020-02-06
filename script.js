const vragen = [
    "Wat is de hoofdstad van Frankrijk?",
    "Hoeveel poten heeft een spin?",
    "Wat is het grootste meer van Nederland?",
    "Noem een duits automerk",
    "Noem een waddeneiland",
];
const antwoorden = [
    "Parijs", "8", "Ijsselmeer", ["Volkswagen", "Audi", "Opel", "Porsche", "BMW", "Mercedes", "Mercedes-Benz"],
    ["Texel", "Vlieland", "Terschelling", "Ameland", "Schiermonnikoog"],
];

document.getElementById("vraag1").innerHTML = vragen[0];
document.getElementById("vraag2").innerHTML = vragen[1];
document.getElementById("vraag3").innerHTML = vragen[2];
document.getElementById("vraag4").innerHTML = vragen[3];
document.getElementById("vraag5").innerHTML = vragen[4];


function controleer() {
    let goed = 0;
    let antwoord1 = document.getElementById("antwoord1").value;
    if (antwoord1 === antwoorden[0]) {
        document.getElementById("antwoord1").style.backgroundColor = "#42ff6b";
        goed += 1;
    } else {
        document.getElementById("antwoord1").style.backgroundColor = "#ff4f42";
    }

    let antwoord2 = document.getElementById("antwoord2").value;
    if (antwoord2 === antwoorden[1]) {
        document.getElementById("antwoord2").style.backgroundColor = "#42ff6b";
        goed += 1;
    } else {
        document.getElementById("antwoord2").style.backgroundColor = "#ff4f42";
    }

    let antwoord3 = document.getElementById("antwoord3").value;
    if (antwoord3 === antwoorden[2]) {
        document.getElementById("antwoord3").style.backgroundColor = "#42ff6b";
        goed += 1;
    } else {
        document.getElementById("antwoord3").style.backgroundColor = "#ff4f42";
    }
    let antwoord4 = document.getElementById("antwoord4").value;
    if (antwoorden[3].includes(antwoord4)) {
        document.getElementById("antwoord4").style.backgroundColor = "#42ff6b";
        goed += 1;
    } else {
        document.getElementById("antwoord4").style.backgroundColor = "#ff4f42";
    }
    let antwoord5 = document.getElementById("antwoord5").value;
    if (antwoorden[4].includes(antwoord5)) {
        document.getElementById("antwoord5").style.backgroundColor = "#42ff6b";
        goed += 1;
    } else {
        document.getElementById("antwoord5").style.backgroundColor = "#ff4f42";
    }
    if (goed === 5) {
        document.getElementById("goedeAntwoorden").innerHTML = "Alle antwoorden zijn goed!";
    } else {
        document.getElementById("goedeAntwoorden").innerHTML = goed + " van de 5 antwoorden zijn goed!";
    }
}