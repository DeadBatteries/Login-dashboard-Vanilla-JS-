import { checkAuth } from "../api/auth.js";


document.addEventListener("DOMContentLoaded", ()=>{

    console.log("Dashboard rodando");
    checkAuth();


});