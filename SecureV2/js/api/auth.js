
import { setSession } from "../storage/localStorage.js";
import { getUsersAPI } from "./api.js";

export function loginUser(email, senha) {
    
    const usuarios = getUsersAPI();

    try{

        if(!usuarios || !Array.isArray(usuarios)){

            throw new Error("no users");

        }

        const loggedUser = usuarios.find(u => u.email === email && u.senha === senha);

        if(!loggedUser){

            throw new Error("usuário não encontrado");

        }

        setSession(loggedUser);

        return loggedUser;


    }catch(error){

        console.log(error);


    }
   

}