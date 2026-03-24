import { getSession, verifyUser } from "../storage/localStorage.js";

export const container = document.getElementById("usr-auth");

export function renderApp(){

    const loggedUser = getSession();
    const verified = verifyUser(loggedUser);
    
    if(!verified)return;
    if(!verified.nome || !verified.email || !verified.senha)return;

    container.innerHTML = "";
    
    const fragment = document.createDocumentFragment();

    const usrdiv = document.createElement("div");
    usrdiv.classList.add("usrinfo-div");


    const usrname = document.createElement("p");
    //usrname.innerHTML = "Bem vindo, " + loggedUser.nome;  //XSS
    usrname.textContent = "Bem vindo, " + verified.nome;  //mais seguro contra XSS

    const usremail = document.createElement("p");
    usremail.textContent = "Email: " + verified.email;


    const logoutBtn = document.createElement("button");
    logoutBtn.classList.add("logout-btn");
    logoutBtn.textContent = "Logout";

    usrdiv.append(usrname, usremail, logoutBtn);
    fragment.appendChild(usrdiv);

    container.appendChild(fragment);

};