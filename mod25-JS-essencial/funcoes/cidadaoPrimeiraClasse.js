
//criando função de forma literal
function fun1(){
}

//armazenando função em variável
const fun2 = function() {

}

//armazenar função em array
const array = [function(a, b) {return a + b}, fun1, fun2]

//função armazenada em atributo de objeto
const obj = {}
onbeforetoggle.falar = function () { return "Eai"}

//passar função como parametro
function run(fun){
    fun()
}

run(function(){console.log("Executando...")})


//função pode retornar/conter outra função
function soma(a,b){
    return function(c){
        console.log(a + b + c)
    }
}

soma(2,3)(4)