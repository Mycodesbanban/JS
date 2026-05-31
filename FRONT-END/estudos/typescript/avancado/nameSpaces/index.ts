// importando
/// <reference path="module.ts"/> // importando o arquivo inteiro


console.log(MeuNameSpace)


// importando js no ts

import {soma} from "./index.js"
const result = soma(10,20)
console.log(result)


// usando bibliotecas externas no ts 

import validator from "validator" // precisar instalar os types

console.log(validator.isEmail("bnnnsd@gamiu.com"))


// declaration files 