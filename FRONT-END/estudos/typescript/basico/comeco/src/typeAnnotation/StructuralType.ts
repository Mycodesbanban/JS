// tipagem estruturada 
type User = {
    username: string,
    password:string | number
}
type VerifyUserFn = (user:User, sentValue:User ) => boolean

const verifyUser: VerifyUserFn= (user, sentValue) => {
     return user.username === sentValue.username && user.password === sentValue.password
}

const bdUser = {
    username:"Juao",
    password:"eu sou um merda meu irmao"
}
const SentUser = {
    username:"Juao",
    password:"eu sou um merda meu irmao"
}
console.log(verifyUser(bdUser, SentUser))