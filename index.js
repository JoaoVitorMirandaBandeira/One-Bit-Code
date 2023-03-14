async function asyncSum(x,y){
    if(typeof x !== 'number' || typeof y !== 'number'){
        return Promise.reject("Os parametros devem ser do type Number")
    }
    return x+y;
}

async function execute(){
    try {
        const result = await asyncSum(50,'40')
        console.log(result)
    } catch (error) {
        console.log(error) //Os parametros devem ser do type Number
    }
}
