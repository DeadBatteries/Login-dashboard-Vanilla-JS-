import { loadUser, saveUsers } from "./storage/localStorage.js";
import { getUsersAPI } from "./api/api.js";
import { loginUser } from "./api/auth.js";
import { renderApp } from "./render/render.js";



const usuarios = getUsersAPI();

console.log("Executando");
console.log(usuarios);

initAPP();

const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", async ()=> {

    const usremail = document.getElementById("usremail-auth");
    const usrpsswrd = document.getElementById("usrpswrd-auth");

    const email = usremail.value;
    const password = usrpsswrd.value;

    await loginUser(email, password);
    renderApp();


});

function initAPP(){

    if(usuarios)saveUsers(usuarios);
    renderApp();

};



