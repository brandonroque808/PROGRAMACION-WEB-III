function conCallback(cb){
  setTimeout(()=>cb("hecho"),1000)
}

function conPromesa(){
  return new Promise(res=>conCallback(res))
}

conPromesa().then(m=>console.log(m))
