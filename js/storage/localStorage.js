

export function saveUsers(users) {

    const usersString = JSON.stringify(users);

    localStorage.setItem("usuarios", usersString);

};

export function loadUser() {

   const users = JSON.parse(localStorage.getItem("usuarios"));

   return users;

};



export function setSession(loggedUser) {

    const loggedUserString = JSON.stringify(loggedUser);

    localStorage.setItem("session", loggedUserString)

};

export function getSession(){

    return JSON.parse(localStorage.getItem("session"));

};

export function clearSession(){

    localStorage.removeItem("session");

};

