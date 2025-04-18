export const getToken = () => {
    return window.localStorage["jwtToken"];
}

export const saveToken = (token: string) => {
    window.localStorage["jwtToken"] = token;
}

export const destroyToken = () => {
    window.localStorage.removeItem("jwtToken");
}