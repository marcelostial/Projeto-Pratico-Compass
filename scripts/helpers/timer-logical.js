export default function timerLogical(){
    const $ = document.querySelector.bind(document);
    const timerSeconds = $("#nSecond");
    
    let seconds = 600;
    setInterval(() => {
        timerSeconds.innerHTML = seconds;
        seconds--
        if (!seconds){
            history.pushState(
                null,
                "Compass - Login",
                "https://marcelostial.github.io/Projeto-Pratico-Compass/",

            )
            window.location.reload();
        }
    }, 1000);

}