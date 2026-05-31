"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const verifyUser = (user, sentValue) => {
    return user.username === sentValue.username && user.password === sentValue.password;
};
const bdUser = {
    username: "Juao",
    password: "eu sou um merda meu irmao"
};
const SentUser = {
    username: "Juao",
    password: "eu sou um merda meu irmao"
};
console.log(verifyUser(bdUser, SentUser));
//# sourceMappingURL=StructuralType.js.map