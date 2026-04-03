
import { loginUser } from "./api/auth.js";

document.addEventListener("DOMContentLoaded", ()=>{

    console.log("Js carregou");

    const loginBtn = document.getElementById("loginBtn");

    loginBtn.addEventListener("click", async ()=> {

        loginBtn.disabled = true;

        await loginUser();

        loginBtn.disabled = false;

    });

});
