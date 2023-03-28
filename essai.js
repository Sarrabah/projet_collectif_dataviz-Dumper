function getValue() {
    // Sélectionner l'élément input et récupérer sa valeur
    var input = document.getElementById("in").value;
    return input;
}

async function getJoke() {
   
    let reponse =await fetch('https://geek-jokes.sameerkumar.website/api?format=json');
    let jokeObject = await reponse.json();
    let joke = jokeObject.joke; 
    document.getElementById("joke").innerHTML =joke;
    console.log(joke);
    return joke;
}

async function meteo () {
    let reponse =await fetch('https://prevision-meteo.ch/services/json/paris');
    let alternance = await reponse.json();
    console.log(alternance);
    if ((getValue() != 0) && (alternance.fcst_day_0.date ==  getValue() ) && (alternance.fcst_day_0.condition == 'Eclaircies')){    
        getJoke();
        document.getElementById("tmin").innerHTML ="la température minimum= "+ alternance.fcst_day_0.tmin;
        document.getElementById("tmax").innerHTML ="la température maximum= "+ alternance.fcst_day_0.tmax;
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
    }
   else if ((getValue() != 0) && (alternance.fcst_day_1.date ==  getValue() ) && (alternance.fcst_day_1.condition == 'Eclaircies')){
        getJoke();
        document.getElementById("tmin").innerHTML ="la température minimum= "+ alternance.fcst_day_1.tmin;
        document.getElementById("tmax").innerHTML ="la température maximum= "+ alternance.fcst_day_1.tmax;
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
    }
    
    else if ((getValue() != 0) && (alternance.fcst_day_2.date ==  getValue() ) && (alternance.fcst_day_2.condition == 'Eclaircies')){
        getJoke();
        document.getElementById("tmin").innerHTML ="la température minimum= "+ alternance.fcst_day_2.tmin;
        document.getElementById("tmax").innerHTML ="la température maximum= "+ alternance.fcst_day_2.tmax;
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
    }
    else if ((getValue() != 0) && (alternance.fcst_day_3.date ==  getValue() ) && (alternance.fcst_day_3.condition == 'Pluie faible')){
        getJoke();
        document.getElementById("tmin").innerHTML ="la température minimum= "+ alternance.fcst_day_3.tmin;
        document.getElementById("tmax").innerHTML ="la température maximum= "+ alternance.fcst_day_3.tmax;
        const pieceElement = document.createElement("div");
        pieceElement.id="rain"
        const image1Element= document.createElement("div");
        image1Element.id    = 'icon rainy';
        const image2Element= document.createElement("div");
        image2Element.id    = 'cloud';
        const image3Element= document.createElement("div");
        image3Element.id    = 'rain';
        const sectionfiches= document.querySelector(".fiches");
        sectionfiches.appendChild(pieceElement);
        pieceElement.appendChild(image1Element);
        image1Element.appendChild(image2Element);
        image1Element.appendChild(image3Element);
    }

    else if ((getValue() != 0) && (alternance.fcst_day_4.date ==  getValue() ) && (alternance.fcst_day_4.condition == 'Eclaircies')){
        getJoke();
        document.getElementById("tmin").innerHTML ="la température minimum= "+ alternance.fcst_day_4.tmin;
        document.getElementById("tmax").innerHTML ="la température maximum= "+ alternance.fcst_day_4.tmax;
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
    }
    else{
        
        console.log(false);
    }
}
meteo();

async function restaurant() {
    let response2= await fetch('https://cors-anywhere.herokuapp.com/https://serpapi.com/search.json?engine=google_maps&q=restaurant&ll=%4048.886471%2C2.341053%2C14z&google_domain=google.com&hl=en&start=100&api_key=88a8063e43592ffc75fb359dedaa8889041421cca56906add4f2940d9e5d2b98')
   let event = await response2.json() 
   let localresults=event.local_results
   
   let badReviews =[]
   for (element of localresults) {
       if (element.rating<4) {
            badReviews.push(element)
        }
    }
    let resultat=badReviews[Math.floor(Math.random()*badReviews.length)];
    //console.log(resultat)
    const infoRestaurant = document.createElement("article");
    const nomRestaurant = document.createElement("p");
    nomRestaurant.innerText= "Le nom du meilleur restaurant: " + resultat.title;
    const rateRestaurant = document.createElement("p");
    rateRestaurant.innerText= "Rating : "+ resultat.rating;
    const etoileRestaurant = document.createElement("img");
    etoileRestaurant.src= "image.jpg";
    const adresseRestaurant = document.createElement("p");
    adresseRestaurant.innerText= "Adresse: " + resultat.address;
    const sectionfiches= document.querySelector(".restaurant");
    sectionfiches.appendChild(infoRestaurant);
    infoRestaurant.appendChild(nomRestaurant);
    infoRestaurant.appendChild(rateRestaurant);
    infoRestaurant.appendChild(etoileRestaurant);
    infoRestaurant.appendChild(adresseRestaurant);

}

async function bar() {
    let response3= await fetch('https://cors-anywhere.herokuapp.com/https://serpapi.com/search.json?engine=google_maps&q=pmu&ll=%4048.8534%2C2.3488%2C14z&google_domain=google.com&hl=fr&type=search&start=20&api_key=88a8063e43592ffc75fb359dedaa8889041421cca56906add4f2940d9e5d2b98')
    let event2 = await response3.json() 
    let localresult=event2.local_results
    let badbarReviews =[]
    for (element of localresult) {
        if (element.rating < 4) {
            badbarReviews.push(element)
        }
    }
    let resultat2 = badbarReviews[Math.floor(Math.random()*badbarReviews.length)]
    console.log(resultat2);
    const infoBar = document.createElement("article");
    const nomBar = document.createElement("p");
    nomBar.innerText= "Le nom du meilleur bar: " + resultat2.title;
    const rateBar = document.createElement("p");
    rateBar.innerText= "Rating : "+ resultat2.rating;
    const etoileBar = document.createElement("img");
    etoileBar.src= "imagee.png";
    const adresseBar = document.createElement("p");
    adresseBar.innerText= "Adresse: " + resultat2.address;
    const sectionfiches= document.querySelector(".bar");
    sectionfiches.appendChild(infoBar);
    infoBar.appendChild(nomBar);
    infoBar.appendChild(rateBar);
    infoBar.appendChild(etoileBar);
    infoBar.appendChild(adresseBar);         
}
 
async function freeEvent() {
        let getEvent= await fetch('https://cors-anywhere.herokuapp.com/https://serpapi.com/search.json?engine=google_events&q=free+events&location=Paris%2C+Paris%2C+Ile-de-France%2C+France&api_key=88a8063e43592ffc75fb359dedaa8889041421cca56906add4f2940d9e5d2b98')
        let eventAnswer = await getEvent.json() 
        let eventArray =[]
        let testDate=getValue();
        let date =testDate.split('.')
        let jour=date[0]
        let mois=date[1]
        let annee=date[2]
        if (mois==03) { mois= "Mar"}
        if (mois==04) {mois ="Apr"}
        let ourDate =`${mois} ${jour}`

        for(element in eventAnswer.events_results){
            let eventDate = eventAnswer.events_results[element].date.start_date
                 if (eventDate==ourDate) {            
           eventArray.push(eventAnswer.events_results[element])}
        }
        let resultat3= eventArray[Math.floor(Math.random()*eventArray.length)];
        console.log(resultat3) 

        const infoEvent = document.createElement("article");
        const nomEvent = document.createElement("p");
        nomEvent.innerText= "Le nom du meilleur event : " + resultat3.title;
        const descripEvent = document.createElement("p");
        descripEvent.innerText= "Description : "+ resultat3.description;
        const imageEvent = document.createElement("img");
        imageEvent.src= resultat3.image;
        const adresseEvent = document.createElement("p");
        adresseEvent.innerText= "Adresse: " + resultat3.address[0];
        const sectionfiches= document.querySelector(".event");
        sectionfiches.appendChild(infoEvent);
        infoEvent.appendChild(nomEvent);
        infoEvent.appendChild(descripEvent);
        infoEvent.appendChild(imageEvent);
        infoEvent.appendChild(adresseEvent);
        //return resultat3;
    }
//freeEvent();










