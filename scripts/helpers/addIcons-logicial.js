export default function addIconsLogical(personalData) {

    let icons = personalData.current.condition.text 
    let addIcons = ""

    if (icons.includes("thunder") && icons.includes("rain")){
        addIcons="./assets/storm.png"

    }else if(icons.includes("thunder")){
        addIcons="./assets/thunder.png"

    }else if(icons.includes("rain") || icons.includes("drizzle")){
        addIcons="./assets/raining.png"

    }else if(icons.includes("Fog") || icons.includes("Mist")){
        addIcons="./assets/cloud.png"

    }else if(icons.includes("Cloudy") || icons.includes("Overcast")){
        addIcons="./assets/cloudy.png"

    }else if(icons.includes("Sunny")){
        addIcons="./assets/sun.png"
    
    }
    return addIcons;
}

