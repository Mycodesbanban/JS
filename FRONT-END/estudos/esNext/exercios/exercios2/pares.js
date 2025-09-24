function apenaspares(por2){
    let array=[]
    for(let i = 0 ; i < por2.length;i++){
        if(por2[i] % 2===0){
            array.push(por2[i])
        }
     }
     return array
    
    }

console.log(apenaspares([2 ,3 ,4 , 6, 7, 7, 8,8]));
