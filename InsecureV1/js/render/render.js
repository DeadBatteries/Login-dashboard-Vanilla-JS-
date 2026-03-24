import { getSession } from "../storage/localStorage.js";

export const container = document.getElementById("usr-auth");

export function renderApp(){

    const loggedUser = getSession();

    if(!loggedUser)return;
    
    container.innerHTML = "";
    
    const fragment = document.createDocumentFragment();

    const usrdiv = document.createElement("div");
    usrdiv.classList.add("usrinfo-div");


    const usrname = document.createElement("p");
    usrname.textContent = "Bem vindo, " + loggedUser.nome;
    

    const usremail = document.createElement("p");
    usremail.textContent = "Email: " + loggedUser.email;


    const logoutBtn = document.createElement("button");
    logoutBtn.classList.add("logout-btn");
    logoutBtn.textContent = "Logout";

    usrdiv.append(usrname, usremail, logoutBtn);
    fragment.appendChild(usrdiv);

    container.appendChild(fragment);

};