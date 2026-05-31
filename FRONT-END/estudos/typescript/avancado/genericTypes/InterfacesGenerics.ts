interface PessoaProtocolo <T=string , U = number>{ // criando os generics e atribuindo valores padrao
    nome:T, // usando o generic
    sobrenome:T
    idade:U // outro generic
}