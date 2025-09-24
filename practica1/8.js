function miFuncion(cb) {
  setTimeout(cb,2000)
}

miFuncion(()=>console.log("ejecutado"))
