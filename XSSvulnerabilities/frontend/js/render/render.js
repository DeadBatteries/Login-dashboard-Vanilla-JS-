import { logout } from "../api/auth.js";


export function  renderApp(username, useremail) {

    console.log("Render chamado");

    const usrname = document.getElementById("usrname");
    usrname.textContent = "Bem vindo: " + username;


    const usrmail = document.getElementById("usrmail");
    usrmail.textContent = useremail;

    const logoutBtn = document.getElementById("usr-logout");

    logoutBtn.addEventListener("click", async ()=>{

        logoutBtn.disabled = true;

        await logout();

        logoutBtn.disabled = false;

    });

};

const params = new URLSearchParams(window.location.search);
const name = params.get("name");

document.getElementById("usrname").innerHTML = name;