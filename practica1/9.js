function miPromesa() {
  return new Promise(res=>setTimeout(()=>res("exito"),3000))
}

miPromesa().then(m=>console.log(m))
