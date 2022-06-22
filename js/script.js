// chiedere all'utente Nome e Cognome
// chiedere all'utente numero km
// chidedere all'utente l'età
// prezzo del biglietto 0.21€ al km
// sconto 20% per minorenni e 40% over 65
// output prezzo finale


// chiedere all'utente Nome e Cognome e i km
function btnGenera() {
    let nomeCognome = document.getElementById("nome").value;
    console.log(nomeCognome);

    let kmDaPercorrere = document.getElementById("km").value;
    console.log(kmDaPercorrere);

    let eta = document.getElementById("Fascia-età").value;
    console.log(eta)

    // stampo il nome e cognome
    document.getElementById("a").innerHTML = nomeCognome;

    let prezzoPerKm = kmDaPercorrere * 0.21;
    let sconto ;
    let prezzoFinale ;

    // in base all'età cambia il tipo di biglietto e stampo il biglietto
    if (eta === "Minorenne"){
        document.getElementById("b").innerHTML = "Biglietto Ridotto (-20%)"
        sconto = prezzoPerKm * 20 / 100;
        prezzoFinale = prezzoPerKm - sconto
        document.getElementById("c").innerHTML = prezzoFinale.toFixed(2)

    }else if(eta === "Maggiorenne"){
        document.getElementById("b").innerHTML = "biglietto Standard"
        sconto = prezzoPerKm;
        prezzoFinale = prezzoPerKm - sconto
        document.getElementById("c").innerHTML = prezzoFinale
    }else{
        document.getElementById("b").innerHTML = "biglietto over 65 (-40%)"
        sconto = prezzoPerKm * 40 / 100;
        prezzoFinale = prezzoPerKm - sconto
        document.getElementById("c").innerHTML = prezzoFinale.toFixed(2)
    }



}