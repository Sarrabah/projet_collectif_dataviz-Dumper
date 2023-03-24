function getValue() {
    // Sélectionner l'élément input et récupérer sa valeur
   
        var input = document.getElementById("in").value;
    
    
    /*if (input == 0){
        console.log("vide");
    }
    else{
        console.log("nonvide");
    }*/
    // Afficher la valeur
    //alert(input);
    //console.log(input);
    return input;
}

async function meteo () {
    let reponse =await fetch('https://prevision-meteo.ch/services/json/paris');
    let alternance = await reponse.json();
    console.log(alternance);
    if ((getValue() != 0) && (alternance.fcst_day_0.date ==  getValue() ) && (alternance.fcst_day_0.condition == 'Eclaircies')){
        
        console.log(true);
        document.getElementById("tmin").innerHTML ="la température minimum= "+ alternance.fcst_day_0.tmin;
        document.getElementById("tmax").innerHTML ="la température maximum= "+ alternance.fcst_day_0.tmax;
        getJoke();
        const pieceElement = document.createElement("div");
        pieceElement.id="sun"
const image1Element= document.createElement("div");
image1Element.id    = 'icon sunny';
const image2Element= document.createElement("div");
image2Element.id    = 'sun';
const image3Element= document.createElement("div");
image3Element.id    = 'rays';


const sectionfiches= document.querySelector(".fiches");
sectionfiches.appendChild(pieceElement);
pieceElement.appendChild(image1Element);
image1Element.appendChild(image2Element);
image2Element.appendChild(image3Element);
        console.log("soleil");
    }
    else{
        
        console.log(false);
    }
}
meteo();




    













async function getJoke() {
   
    let reponse =await fetch('https://geek-jokes.sameerkumar.website/api?format=json');
    let jokeObject = await reponse.json();
    
    let joke = jokeObject.joke; 
    document.getElementById("joke").innerHTML =joke;
    console.log(joke);
    return joke;
}


