import timerLogical from './helpers/timer-logical.js';
export default function passowrdLogical(){
    const $ = document.querySelector.bind(document);
    const userLogin = $("#areaEmail input");
    const userPassword = $("#areaPassword input");
    const buttonContinuar = $("#continuar");
    const errorMsg = $("#errorMsg");
    
    const homePage = $("#homePage");
    const loginPage = $("#loginPage");

    buttonContinuar.addEventListener("click", () => { 
        if (userLogin.value === "admin" && userPassword.value === "admin"){
            homePage.style.display="flex";
            loginPage.style.display="none";
            timerLogical()
            document.title="Compass - Home"
        }
        else{
            errorMsg.style.visibility="visible";
            userLogin.value="";
            userPassword.value="";
            userLogin.style.border="solid 1px #E9B425";
            userPassword.style.border="solid 1px #E9B425";
        }
    })
}