
import { loginUser } from "./api/auth.js";



document.addEventListener("DOMContentLoaded", ()=>{

    XSS();

    console.log("Js carregou");

    const loginBtn = document.getElementById("loginBtn");

    loginBtn.addEventListener("click", async ()=> {

        loginBtn.disabled = true;

        await loginUser();

        loginBtn.disabled = false;

    });

});


function XSS() {

const params = new URLSearchParams(window.location.search);
const name = params.get("name");

document.getElementById("usrname").innerHTML = name;

};
