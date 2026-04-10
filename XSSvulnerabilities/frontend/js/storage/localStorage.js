

export function saveUsers(users) {

    if(!users)return;
    
    const usersString = JSON.stringify(users);

    localStorage.setItem("usuarios", usersString);

};

export function loadUser() {

   const users = JSON.parse(localStorage.getItem("usuarios"));

   return users;

};



export function setSession(loggedUser) {

    if(!loggedUser)return;
    if(typeof(loggedUser) !== "object")return;

    const user = verifyUser(loggedUser);

    if(!user)return;

    const users = loadUser();

    if(!users)return;

    let userIndex = users.findIndex(u => user.email === u.email);

    if(userIndex === -1)return;

    const token = crypto.randomUUID();

    users[userIndex].token = token;

    saveUsers(users);

    localStorage.setItem("session", token );

    return users[userIndex];

};

export function getSession(){

    try{

        let token = localStorage.getItem("session");

        let users = loadUser();

        if(!users)return;

        let verified = users.find(u => u.token === token);

        if(!verified){

            localStorage.removeItem("session");
            return;

        }
        
        return verified;

    }catch(error){

        console.log(error);

    }   
};

export function clearSession(){

    localStorage.removeItem("session");

};

function verifyUser(loggedUser) {

    const users = loadUser();

    if(!users)return;

    const verified = users.find(u => u.email === loggedUser.email && u.nome === loggedUser.nome && u.senha === loggedUser.senha );

    return verified;


};

export function endSession() {

    localStorage.removeItem("session");
    location.reload(true);

};
