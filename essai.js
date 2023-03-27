// function getValue() {
//     // Sélectionner l'élément input et récupérer sa valeur
   
//         var input = document.getElementById("in").value;
    
    
//     /*if (input == 0){
//         console.log("vide");
//     }
//     else{
//         console.log("nonvide");
//     }*/
//     // Afficher la valeur
//     //alert(input);
//     //console.log(input);
//     return input;
// }

// async function meteo () {
//     let reponse =await fetch('https://prevision-meteo.ch/services/json/paris');
//     let alternance = await reponse.json();
//     console.log(alternance);
//     if ((getValue() != 0) && (alternance.fcst_day_0.date ==  getValue() ) && (alternance.fcst_day_0.condition == 'Eclaircies')){
        
//         console.log(true);
//         document.getElementById("tmin").innerHTML ="la température minimum= "+ alternance.fcst_day_0.tmin;
//         document.getElementById("tmax").innerHTML ="la température maximum= "+ alternance.fcst_day_0.tmax;
//         getJoke();
//         const pieceElement = document.createElement("div");
//         pieceElement.id="sun"
// const image1Element= document.createElement("div");
// image1Element.id    = 'icon sunny';
// const image2Element= document.createElement("div");
// image2Element.id    = 'sun';
// const image3Element= document.createElement("div");
// image3Element.id    = 'rays';


// const sectionfiches= document.querySelector(".fiches");
// sectionfiches.appendChild(pieceElement);
// pieceElement.appendChild(image1Element);
// image1Element.appendChild(image2Element);
// image2Element.appendChild(image3Element);
//         console.log("soleil");
//     }
//     else{
        
//         console.log(false);
//     }
// }
// meteo();


// async function getJoke() {
   
//     let reponse =await fetch('https://geek-jokes.sameerkumar.website/api?format=json');
//     let jokeObject = await reponse.json();
    
//     let joke = jokeObject.joke; 
//     document.getElementById("joke").innerHTML =joke;
//     console.log(joke);
//     return joke;
// }

// async function restaurant() {
// let response2= await fetch('https://serpapi.com/search.json?engine=google_maps&q=restaurant&ll=%4048.886471%2C2.341053%2C14z&google_domain=google.com&hl=en&start=100&api_key=88a8063e43592ffc75fb359dedaa8889041421cca56906add4f2940d9e5d2b98')
// let event = await response2.json() 
// let localresults=event.local_results

// let badReviews =[]
// for (element of localresults) {
//     if (element.rating<4) {
//         badReviews.push(element)
//     }
// }
// console.log(badReviews[Math.floor(Math.random()*badReviews.length)])
// return badReviews[Math.floor(Math.random()*badReviews.length)]
// }
// restaurant()

// async function bar() {
//     let response3= await fetch('https://serpapi.com/search.json?engine=google_maps&q=pmu&ll=%4048.8534%2C2.3488%2C14z&google_domain=google.com&hl=fr&type=search&start=20&api_key=88a8063e43592ffc75fb359dedaa8889041421cca56906add4f2940d9e5d2b98')
//     let event2 = await response3.json() 
//     let localresult=event2.local_results
//     console.log (localresult)
//     let badbarReviews =[]
//     for (element of localresult) {
//         if (element.rating<4) {
//             badbarReviews.push(element)
//         }
//     }
//     // console.log(badbarReviews)
//     console.log(badbarReviews[Math.floor(Math.random()*badbarReviews.length)])
//     return badbarReviews[Math.floor(Math.random()*badbarReviews.length)]
//     }

// bar()
let testDate="27.03.2022"
let date =testDate.split('.')
let jour=date[0]
let mois=date[1]
let annee=date[2]

if (mois==03) { mois= "Mar"}
if (mois==04) {mois ="Apr"}
let ourDate =`${mois} ${jour}` 

async function freeEvent() {
        let getEvent= await fetch('https://serpapi.com/search.json?engine=google_events&q=free+events&location=Paris%2C+Paris%2C+Ile-de-France%2C+France&api_key=88a8063e43592ffc75fb359dedaa8889041421cca56906add4f2940d9e5d2b98')
        let eventAnswer = await getEvent.json() 
        let eventArray =[]
        for(element in eventAnswer.events_results){
            let eventDate = eventAnswer.events_results[element].date.start_date
                 if (eventDate==ourDate) {            
           eventArray.push(eventAnswer.events_results[element])}
        }
        console.log(eventArray[Math.floor(Math.random()*eventArray.length)])
        return eventArray[Math.floor(Math.random()*eventArray.length)]
    }
freeEvent()









