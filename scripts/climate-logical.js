export default function climateLogical(){
    fetch("https://api.weatherapi.com/v1/current.json?key=1bfd13269e7d4825a7811658221002&q=Juiz_de_Fora&aqi=no")
    .then(dataAnswer => dataAnswer.json())
    .then(personalData => {
        const $ = document.querySelector.bind(document);
        const iconTemp=$("#iconTempo");
        const temp =$("#grau");
        const city =$("#local");
        
        let icons = personalData.current.condition.text 
        let addIcons = ""

        city.textContent=`${personalData.location.name} - MG`
        temp.textContent=`${personalData.current.temp_c.toFixed()}°`

        if (icons.includes("thunder") && icons.includes("rain")){
            addIcons="../assets/storm.png"

        }else if(icons.includes("thunder")){
            addIcons="../assets/thunder.png"

        }else if(icons.includes("rain") || icons.includes("drizzle")){
            addIcons="../assets/raining.png"

        }else if(icons.includes("Fog") || icons.includes("Mist")){
            addIcons="../assets/cloud.png"

        }else if(icons.includes("Cloudy") || icons.includes("Overcast")){
            addIcons="../assets/cloudy.png"

        }else if(icons.includes("Sunny")){
            addIcons="../assets/sun.png"
        
        }

        iconTemp.src=addIcons

    })
}

