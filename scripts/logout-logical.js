export default function buttonLogout(){
    const $ = document.querySelector.bind(document);
    const clickLogout =$("#buttonLogout");

    clickLogout.addEventListener("click", () => {
        history.pushState(
            null,
            "Compass - Login", 
            "https://marcelostial.github.io/Projeto-Pratico-Compass/"
        )   
        window.location.reload();
    });
}