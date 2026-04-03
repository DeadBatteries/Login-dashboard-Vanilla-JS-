

import { getUsers } from "./storage.js";

import http from "http"; //importa o módulo nativo que cria servidores HTTP
import crypto from "crypto";
import fs from "fs";
 

 const server = http.createServer((req,res) => { /*cria o servidor e define uma função que recebe a requisição e envia a resposta    */

    console.log("REQUISIÇÃO CHEGOU");
    console.log(req.url); //ex: "/login"
    console.log(req.method); //ex: POST OU GET

    if(req.url.startsWith("/api/login"  ) && req.method === "POST") {

        let body = ""; 

        req.on("data", chunk => { /*on define um *event listener* para o evento data, então para cada dado recebido concatena cada 
        pedaço do corpo*/

            body += chunk;

        })

        req.on("end", ()=>{

            try{

                const data = JSON.parse(body);  /*transformamos em um objeto JS*/
                console.log(data); /*exemplo: {username: "ex", password: "ex"};*/
               
                const users = getUsers();

                const validUser = users.find(u => data.senha === u.senha && data.email === u.email);

                if(!validUser){

                    res.writeHead(401, {"Content-type":"text/plain"});
                    res.end("Credenciais inválidas");

                    return;

                }else{

                    const token = crypto.randomBytes(32).toString("hex");

                    const path = "session.json";

                    let sessions = {};

                    if(fs.existsSync(path)) {

                        const fileContent = fs.readFileSync(path, "utf8");
                        if (fileContent) {

                            sessions = JSON.parse(fileContent);

                        };

                    };


                    sessions[token] = data.email;

                    fs.writeFileSync(path, JSON.stringify(sessions, null, 2));

                    res.writeHead(200, {

                        "Content-type":"text/plain",
                        "Set-Cookie": `session=${token}; HttpOnly; Path=/; Max-Age=3600`

                    });

                    res.end("Login bem sucedido");
                    

                };

                res.writeHead(200, {    /* envia status http + respostas */
                
                    "Content-type":"text/plain",
            
                })

                res.end("Servidor Rodando") /* envia o conteudo e fecha a resposta */


            }catch(error){

                res.writeHead(400, {"Content-type":"text/plain"});
                res.end("JSON inválido");
                
            };
        });
   

    }

    if(req.url.startsWith("/api/dashboard") && req.method === "GET"){

        const cookies = req.headers.cookie;

        let token = null;

        if(cookies){

            const parts = cookies.split(";");

            parts.forEach(p => {

                const[key,value] = p.trim().split("=");

                if(key === "session") {

                    token = value;

                }

            });

            };

            const path = "session.json";

            let sessions = {};

            if(fs.existsSync(path)){

                const fileContent = fs.readFileSync(path, "utf8");

                if(fileContent){

                     sessions=JSON.parse(fileContent);

                }

            };

            const email = sessions[token];

            if(!email){

                res.writeHead(401, {"Content-type": "text/plain"});
                res.end("Não autorizado");

                return;

            };

            const users = getUsers();
            const user = users.find(u=> u.email === email);
            

            res.writeHead(200, {"Content-type":"text/plain"});
            res.end(JSON.stringify({

                email: user.email,
                name: user.nome

            }));
            
            return;


    }

    if(req.url === "/api/logout" && req.method === "POST"){

        const cookies = req.headers.cookie;
        let token = null;
        
        if(cookies){

            const parts = cookies.split(";");

            parts.forEach(p => {

                const[key,value] = p.trim().split("=");

                if(key === "session") {

                    token = value;

                }

            });

        };


        const path = "session.json";

        let sessions = {};


        if(!fs.existsSync(path)){

            res.writeHead(401, {"Content-type":"text/plain"});
            res.end("Sessão inválida");
            return;

        }
        
        const fileContent = fs.readFileSync(path, "utf8")

        if(fileContent){

            sessions = JSON.parse(fileContent);
                
        }

        if(!sessions[token]){

                res.writeHead(401, {"Content-type":"text/plain"});
                res.end("Sessão inválida");
                return;

        }
            
        delete sessions[token];
            
        try{

            fs.writeFileSync(path, JSON.stringify(sessions, null, 2),"utf8");
            console.log("Sessão deletada");

            res.writeHead(200,
                {"Content-type":"text/plain",
                "Set-Cookie": "session=; HttpOnly; Path=/; Max-Age=0"}
                    
            );

            res.end("Logout bem sucedido");

        }catch(error){
                
                res.writeHead(500, {"Content-type":"text/plain"});

                console.error(`Error writing file: ${error}`)

        };

    };

    console.log("ENTROU NO GET FINAL");

    if (req.method === "GET") {

    const cleanUrl = req.url.split("?")[0];
    const path = process.cwd() + "/../frontend" + cleanUrl;
   
    console.log(path);

    if (fs.existsSync(path)) {

        console.log("ENTROU NO STATIC FILE");
        const file = fs.readFileSync(path);

        let contentType = "text/plain";

        if(cleanUrl. endsWith(".html")) contentType = "text/html";
        else if(cleanUrl.endsWith(".js")) contentType = "application/javascript";
        else if(cleanUrl.endsWith(".css")) contentType = "text/css";

        console.log("SERVINDO ARQUIVO:", path);
        console.log("CONTENT TYPE:", contentType);

        res.writeHead(200, {"Content-type": contentType});
        res.end(file);
        return;
    }
}
        

});

server.listen(3000, ()=>{   /*coloca o servidor para escutar a porta 3000 */

    console.log("Servidor Rodando na porta 3000");

});

