export default function buttonLogout(){
    const $ = document.querySelector.bind(document);
    const clickLogout =$("#buttonLogout");

    clickLogout.addEventListener("click", () => {
        window.location.reload();
    });
}