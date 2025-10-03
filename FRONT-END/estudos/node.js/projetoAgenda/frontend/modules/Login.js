import validator from "validator"


export default class Login{
    constructor(FormClass){
        this.form = document.querySelector(FormClass)
    }
    init(){
        this.events();

    }

    events(){
        if(!this.form) return
        this.form.addEventListener("submit",  e => {
            e.preventDefault()
           this.validate(e);

        });

    }
    validate(e){
        const el = e.target;
        const emailInput = el.querySelector("input[name='email']")
        const passwordInput= el.querySelector("input[name='password']")
        let error = false
        if(!validator.isEmail(emailInput.value)){
            alert("Email invalido")
            error = true
        }  
           if(passwordInput.value.length <3 || passwordInput.value.length > 50){
            alert("senha precisa ter entre 3 a 50 caracteres")
            error = true
        }

        if(!error) el.submit()

        console.log(emailInput.value)
        console.log(passwordInput.value)
    }
}