function getValue() {
  // Sélectionner l'élément input et récupérer sa valeur
  var input = document.getElementById("in").value;
  return input;
}
function playMusic() {
  let audio = new Audio("music.mp3");
  audio.play();
}
async function getJoke() {
  let reponse = await fetch(
    "https://geek-jokes.sameerkumar.website/api?format=json"
  );
  let jokeObject = await reponse.json();
  let joke = jokeObject.joke;
  document.getElementById("joke").innerHTML = joke;
  console.log(joke);
  return joke;
}

async function meteo() {
  let reponse = await fetch("https://prevision-meteo.ch/services/json/paris");
  let meteo = await reponse.json();
  console.log(meteo);
  if (
    getValue() != 0 &&
    meteo.fcst_day_0.date == getValue() &&
    meteo.fcst_day_0.condition == "Eclaircies"
  ) {
    document.getElementById("meteo").innerHTML =
      " Mauvais temps ? C'est le moment idéal pour une balade. Il fait " +
      Math.floor(meteo.fcst_day_0.tmin + meteo.fcst_day_0.tmax) / 2 +
      "°C en moyenne";
    const pieceElement = document.createElement("div");
    pieceElement.id = "sun";
    const image1Element = document.createElement("div");
    image1Element.id = "icon sunny";
    const image2Element = document.createElement("div");
    image2Element.id = "sun";
    const image3Element = document.createElement("div");
    image3Element.id = "rays";

    const sectionfiches = document.querySelector(".fiches");
    sectionfiches.appendChild(pieceElement);
    pieceElement.appendChild(image1Element);
    image1Element.appendChild(image2Element);
    image2Element.appendChild(image3Element);
  } else if (
    getValue() != 0 &&
    meteo.fcst_day_1.date == getValue() &&
    meteo.fcst_day_1.condition == "Averses de pluie faible"
  ) {
    document.getElementById("meteo").innerHTML =
      " Mauvais temps ? C'est le moment idéal pour une balade. Il fera " +
      Math.floor(meteo.fcst_day_1.tmin + meteo.fcst_day_1.tmax) / 2 +
      "°C en moyenne";
    const pieceElement = document.createElement("div");
    pieceElement.id = "sun";
    const image1Element = document.createElement("div");
    image1Element.id = "icon sunny";
    const image2Element = document.createElement("div");
    image2Element.id = "sun";
    const image3Element = document.createElement("div");
    image3Element.id = "rays";
    const sectionfiches = document.querySelector(".fiches");
    sectionfiches.appendChild(pieceElement);
    pieceElement.appendChild(image1Element);
    image1Element.appendChild(image2Element);
    image2Element.appendChild(image3Element);
  } else if (
    getValue() != 0 &&
    meteo.fcst_day_2.date == getValue() &&
    meteo.fcst_day_2.condition == "Pluie faible"
  ) {
    getJoke();
    document.getElementById("meteo").innerHTML =
      " Mauvais temps ? C'est le moment idéal pour une balade. Il fera" +
      Math.floor(meteo.fcst_day_2.tmin + meteo.fcst_day_2.tmax) / 2 +
      "°C en moyenne";
    const pieceElement = document.createElement("div");
    pieceElement.id = "sun";
    const image1Element = document.createElement("div");
    image1Element.id = "icon sunny";
    const image2Element = document.createElement("div");
    image2Element.id = "sun";
    const image3Element = document.createElement("div");
    image3Element.id = "rays";
    const sectionfiches = document.querySelector(".fiches");
    sectionfiches.appendChild(pieceElement);
    pieceElement.appendChild(image1Element);
    image1Element.appendChild(image2Element);
    image2Element.appendChild(image3Element);
  } else if (
    getValue() != 0 &&
    meteo.fcst_day_3.date == getValue() &&
    meteo.fcst_day_3.condition == "Ensolleilé"
  ) {
 
    document.getElementById("meteo").innerHTML =
      " Mauvais temps ? C'est le moment idéal pour une balade. Il fera " +
      Math.floor(meteo.fcst_day_3.tmin + meteo.fcst_day_3.tmax) / 2 +
      "°C en moyenne";
    const pieceElement = document.createElement("div");
    pieceElement.id = "sun";
    const image1Element = document.createElement("div");
    image1Element.id = "icon sunny";
    const image2Element = document.createElement("div");
    image2Element.id = "sun";
    const image3Element = document.createElement("div");
    image3Element.id = "rays";
    const sectionfiches = document.querySelector(".fiches");
    sectionfiches.appendChild(pieceElement);
    pieceElement.appendChild(image1Element);
    image1Element.appendChild(image2Element);
    image2Element.appendChild(image3Element);
  } else if (
    getValue() != 0 &&
    meteo.fcst_day_4.date == getValue() &&
    meteo.fcst_day_4.condition == "Eclaircies"
  ) {
    getJoke();
    document.getElementById("meteo").innerHTML =
      " Mauvais temps ? C'est le moment idéal pour une balade. Il fera " +
      Math.floor(meteo.fcst_day_4.tmin + meteo.fcst_day_4.tmax) / 2 +
      "°C en moyenne";
    const pieceElement = document.createElement("div");
    pieceElement.id = "sun";
    const image1Element = document.createElement("div");
    image1Element.id = "icon sunny";
    const image2Element = document.createElement("div");
    image2Element.id = "sun";
    const image3Element = document.createElement("div");
    image3Element.id = "rays";
    const sectionfiches = document.querySelector(".fiches");
    sectionfiches.appendChild(pieceElement);
    pieceElement.appendChild(image1Element);
    image1Element.appendChild(image2Element);
    image2Element.appendChild(image3Element);
  } else {
    console.log(false);
  }
}
meteo();

async function restaurant() {
  let response2 = await fetch(
    "https://cors-anywhere.herokuapp.com/https://serpapi.com/search.json?engine=google_maps&q=restaurant&ll=%4048.886471%2C2.341053%2C14z&google_domain=google.com&hl=en&start=100&api_key=94dc42afe427788d76393b2f99aee80cc8efac5943493384c70f63f382860a6d"
  );
  let event = await response2.json();
  let localresults = event.local_results;

  let badReviews = [];
  for (element of localresults) {
    if (element.rating < 4) {
      badReviews.push(element);
    }
  }
  let resultat = badReviews[Math.floor(Math.random() * badReviews.length)];
  //console.log(resultat)
  const infoRestaurant = document.createElement("article");
  const nomRestaurant = document.createElement("p");
  nomRestaurant.innerText = `Un repas, une intoxication alimentaire ? 

     ${resultat.title}`;
  const rateRestaurant = document.createElement("p");
  rateRestaurant.innerText = "L'avis du public : " + resultat.rating;
  const etoileRestaurant = document.createElement("img");
  etoileRestaurant.src = "image.jpg";
  const adresseRestaurant = document.createElement("p");
  adresseRestaurant.innerText = `Rendez-vous ici : 
     ${resultat.address}`;
  const sectionfiches = document.querySelector(".restaurant");
  sectionfiches.appendChild(infoRestaurant);
  infoRestaurant.appendChild(nomRestaurant);
  infoRestaurant.appendChild(rateRestaurant);
  infoRestaurant.appendChild(etoileRestaurant);
  infoRestaurant.appendChild(adresseRestaurant);
}

async function bar() {
  let response3 = await fetch(
    "https://cors-anywhere.herokuapp.com/https://serpapi.com/search.json?engine=google_maps&q=pmu&ll=%4048.8534%2C2.3488%2C14z&google_domain=google.com&hl=fr&type=search&start=20&api_key=94dc42afe427788d76393b2f99aee80cc8efac5943493384c70f63f382860a6d"
  );
  let event2 = await response3.json();
  let localresult = event2.local_results;
  let badbarReviews = [];
  for (element of localresult) {
    if (element.rating < 4) {
      badbarReviews.push(element);
    }
  }
  let resultat2 =
    badbarReviews[Math.floor(Math.random() * badbarReviews.length)];
  console.log(resultat2);
  const infoBar = document.createElement("article");
  const nomBar = document.createElement("p");
  nomBar.innerText = `Plus qu'un PMU, des souvenirs d'enfance :

    ${resultat2.title}`;
  const rateBar = document.createElement("p");
  rateBar.innerText = "L'avis du public : " + resultat2.rating;
  const etoileBar = document.createElement("img");
  etoileBar.src = "imagee.png";
  const adresseBar = document.createElement("p");
  adresseBar.innerText = `Rendez-vous ici : 
     ${resultat2.address}`;
  const sectionfiches = document.querySelector(".bar");
  sectionfiches.appendChild(infoBar);
  infoBar.appendChild(nomBar);
  infoBar.appendChild(rateBar);
  infoBar.appendChild(etoileBar);
  infoBar.appendChild(adresseBar);
}

async function freeEvent() {
  let getEvent = await fetch(
    "https://cors-anywhere.herokuapp.com/https://serpapi.com/search.json?engine=google_events&q=free+events&location=Paris%2C+Paris%2C+Ile-de-France%2C+France&api_key=94dc42afe427788d76393b2f99aee80cc8efac5943493384c70f63f382860a6d"
  );
  let eventAnswer = await getEvent.json();
  let eventArray = [];
  let testDate = getValue();
  let date = testDate.split(".");
  let jour = 0;
  if (date[0][0] == 0) {
    jour = date[0].substring(1);
  } else {
    jour = date[0];
  }
  let mois = date[1];
  //let annee=date[2]
  if (mois == 03) {
    mois = "Mar";
  }
  if (mois == 04) {
    mois = "Apr";
  }
  let ourDate = `${mois} ${jour}`;

  for (element in eventAnswer.events_results) {
    let eventDate = eventAnswer.events_results[element].date.start_date;
    if (eventDate == ourDate) {
      eventArray.push(eventAnswer.events_results[element]);
    }
  }
  let resultat3 = eventArray[Math.floor(Math.random() * eventArray.length)];
  console.log(resultat3);

  const infoEvent = document.createElement("article");
  const nomEvent = document.createElement("p");
  nomEvent.innerText = `Pas envie de dépenser d'argent? 
        Découvrez notre meilleur event gratuit:

         ${resultat3.title}`;
  const descripEvent = document.createElement("p");
  descripEvent.innerText = "Description : " + resultat3.description;
  const imageEvent = document.createElement("img");
  imageEvent.src = resultat3.image;
  const adresseEvent = document.createElement("p");
  adresseEvent.innerText = "Adresse: " + resultat3.address[0];
  const sectionfiches = document.querySelector(".event");
  sectionfiches.appendChild(infoEvent);
  infoEvent.appendChild(nomEvent);
  infoEvent.appendChild(descripEvent);

  infoEvent.appendChild(adresseEvent);
  infoEvent.appendChild(imageEvent);
  //return resultat3;
}
//freeEvent();

// cloud
/*const pieceElement = document.createElement("div");
        pieceElement.id="cloud"
        const image1Element= document.createElement("div");
        image1Element.id    = 'icon cloudy';
        const image2Element= document.createElement("div");
        image2Element.id    = 'cloud';
        const image3Element= document.createElement("div");
        image3Element.id    = 'cloud';
        const sectionfiches= document.querySelector(".fiches");
        sectionfiches.appendChild(pieceElement);
        pieceElement.appendChild(image1Element);
        image1Element.appendChild(image2Element);
        image1Element.appendChild(image3Element);*/
