import isEmail from "validator/lib/isEmail"

const showMessagemErro = "show-error-message"


const form = document.querySelector(".form") as HTMLFormElement
const username = document.querySelector(".username") as HTMLInputElement
const email= document.querySelector(".email")as HTMLInputElement
const password = document.querySelector(".password")as HTMLInputElement
const password2 = document.querySelector(".password2")as HTMLInputElement

form.addEventListener("submit", (e)=>{
    e.preventDefault()
    hideErrorMessage(form)
    checkForEmptyFields(username, email, password, password2)
    checkEmail(email)
});

function hideErrorMessage (form:HTMLFormElement):void{
    form.querySelectorAll("." + showMessagemErro).forEach(item => item.classList.remove(showMessagemErro))
}

function MessagemError (input: HTMLInputElement, msg:string):void{
    const formFilds = input.parentElement as HTMLDivElement
    const errorMessage=  formFilds.querySelector(".error-message") as HTMLSpanElement
    errorMessage.innerHTML = msg
    formFilds.classList.add(showMessagemErro)

}

function checkForEmptyFields (...inputs:HTMLInputElement[]):void{
    inputs.forEach(input =>{
        if(!input.value) MessagemError(input, "este campo nao pode ficar vazio")
        
    })
}
function checkEmail (input:HTMLInputElement){
    if(!isEmail(input.value)) return MessagemError(input , "email nao pode ficar vazio")
}