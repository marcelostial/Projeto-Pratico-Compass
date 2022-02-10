import addIconsLogical from "./helpers/addIcons-logicial.js";
export default function climateLogical(){
    fetch("https://api.weatherapi.com/v1/current.json?key=1bfd13269e7d4825a7811658221002&q=Juiz_de_Fora&aqi=no")
    .then(dataAnswer => dataAnswer.json())
    .then(personalData => {
        const $ = document.querySelector.bind(document);
        const temp =$("#grau");
        const city =$("#local");
        
        city.textContent=`${personalData.location.name} - MG`
        temp.textContent=`${personalData.current.temp_c.toFixed()}°`

        let icon=addIconsLogical(personalData)
        const iconTemp=$("#iconTempo");
        iconTemp.src=icon
    })
}