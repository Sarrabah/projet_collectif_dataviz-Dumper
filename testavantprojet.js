async function meteo () {
    let reponse =await fetch('https://prevision-meteo.ch/services/json/paris');
    let alternance = await reponse.json();
    
        console.log(alternance);
    
    //console.log(alternance.fcst_day_0.date);
    return alternance;
}
meteo();


