export default function watchLogical(){
    const $ = document.querySelector.bind(document);
    const userWatch =$("#hora");
    const userData =$("#data");

    let data=new Date();
    let horas=data.getHours();
    let minutos=data.getMinutes();
    
    let diaSemana=data.getDay();
    let dia=data.getDate();
    let mes=data.getMonth();
    let ano=data.getFullYear();

    const userDiaSemana = new Array( 
        "domingo",
        "segunda-feira",
        "terça-feira",
        "quarta-feira",
        "quinta-feira",
        "sexta-feira",
        "sábado",
    )

    const userMes = new Array(
        "janeiro",
        "fevereiro",
        "março",
        "abril",
        "maio",
        "junho",
        "julho",
        "agosto",
        "setembro",
        "outubro",
        "novembro",
        "dezembro",
    )

    userWatch.innerText = `${horas <= 9 ? "0" : ""}${horas}:${minutos <= 9 ? "0" : ""}${minutos}`
    userData.innerText = `${userDiaSemana[diaSemana]}, ${dia <= 9 ? "0" : ""}${dia} de ${userMes[mes]} de ${ano}`
}
