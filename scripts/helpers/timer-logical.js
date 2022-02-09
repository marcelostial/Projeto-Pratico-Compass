export default function timerLogical(){
    const $ = document.querySelector.bind(document);
    const timerSeconds = $("#nSecond");
    
    let seconds = 600;
    setInterval(() => {
        timerSeconds.innerHTML = seconds;
        seconds--
        if (!seconds){
            window.location.reload();
        }
    }, 1000);

}