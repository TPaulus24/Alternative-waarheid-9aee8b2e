let antwoorden = ['Parijs', '8', 'Ijsselmeer']
let automerken = ["Volkswagen", "Audi", "Opel", "Porsche", "BMW", "Mercedes", "Mercedes-Benz"]
let wadde = ["Texel", "Vlieland", "Terschelling", "Ameland", "Schiermonnikoog"]

function controleer() {
    let goed = 0;
    let input1 = document.getElementById("vraag1").value;
    if (input1 == antwoorden[0]) {
        document.getElementById("vraag1").style.backgroundColor = "#42ff6b";
        goed += 1;
    } else {
        document.getElementById("vraag1").style.backgroundColor = "#ff4f42";
    }

    let input2 = document.getElementById("vraag2").value;
    if (input2 == antwoorden[1]) {
        document.getElementById("vraag2").style.backgroundColor = "#42ff6b";
        goed += 1;
    } else {
        document.getElementById("vraag2").style.backgroundColor = "#ff4f42";
    }

    let input3 = document.getElementById("vraag3").value;
    if (input3 == antwoorden[2]) {
        document.getElementById("vraag3").style.backgroundColor = "#42ff6b";
        goed += 1;
    } else {
        document.getElementById("vraag3").style.backgroundColor = "#ff4f42";
    }

    let input4 = document.getElementById("vraag4").value;
    if (automerken.includes(input4)) {
        document.getElementById("vraag4").style.backgroundColor = "#42ff6b";
        goed += 1;
    } else {
        document.getElementById("vraag4").style.backgroundColor = "#ff4f42";
    }

    let input5 = document.getElementById("vraag5").value;
    if (wadde.includes(input5)) {
        document.getElementById("vraag5").style.backgroundColor = "#42ff6b";
        goed += 1;
    } else {
        document.getElementById("vraag5").style.backgroundColor = "#ff4f42";
    }
    if (goed == 5) {
        document.getElementById("goedeAntwoorden").innerHTML = "Alle antwoorden zijn goed!";
    } else {
        document.getElementById("goedeAntwoorden").innerHTML = goed + " van de 5 antwoorden zijn goed!";
    }
}