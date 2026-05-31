const arraydenumber: Array<number> = [1, 2, 3,4,5,5,6,6,6,6,6,6] // type generic Array

async function promisseAsync() {
    return 1;
}

function MinhaPromisse(): Promise<number>{
    return new Promise((resolve, reject )=> {
        setTimeout(()=>{ 
            resolve(1)
        }, 1000)
    })
}

MinhaPromisse().then(resultado => console.log(resultado + 1))
promisseAsync().then(resultado => console.log(resultado + 1))