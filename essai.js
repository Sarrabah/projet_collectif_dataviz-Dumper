function getValue() {
    // Sélectionner l'élément input et récupérer sa valeur
    var input = document.getElementById("in").value;
    // Afficher la valeur
    alert(input);
    console.log(input);
}

async function getJoke() {
   
    let reponse =await fetch('https://geek-jokes.sameerkumar.website/api?format=json');
    let jokeObject = await reponse.json();
    
    let joke = jokeObject.joke; 
    console.log(joke);
    document.getElementById("joke").innerHTML =joke;
    return joke;
}
getJoke();

async function meteo () {
    // paris
    const reponse =await fetch('https://www.prevision-meteo.ch/services/json/lat=48.856lng=2.352');
    const alternance = await reponse.json();
    return console.log (alternance);
}
meteo();
