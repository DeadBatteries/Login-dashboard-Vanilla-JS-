
import { renderApp } from "../render/render.js";

export async function loginUser() {
    
    console.log("Clique no Login");

    const email = document.getElementById("usremail-auth").value;
    const senha = document.getElementById("usrpswrd-auth").value;

    const res = await fetch("/api/login", {

        method:"POST",
        headers: {

            "Content-type":"application/json"

        },

        body: JSON.stringify({email, senha})
        
    });

    if(res.ok) {

        console.log("Login Bem Sucedido!");
        window.location.href = "/html/dashboard.html";

    }else if(res.status === 401){
    
       alert("Credenciais Inválidas");

    }

    
};

export async function checkAuth(){

    console.log("Entrou no checkAuth")
    const res = await fetch ("/api/dashboard")

    if(res.ok){
    
        const data = await res.json();

        console.log(data);

        renderApp(data.name, data.email);
       

    }else if(res.status === 401 ){

        alert("Sessão inválida ou expirada");
        window.location.href = "/html/login.html";

    };


};

export async function logout() {

 const res = await fetch("/api/logout", {

            method:"POST",

        });

        if(res.ok){

            console.log("Logout Concluído");
            window.location.href = "/html/login.html"

        }else{

            alert("Erro ao fazer logout");

        };


};