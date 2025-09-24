function miFuncion(cad) {
  let rev = cad.split("").reverse().join("")
  return cad === rev
}

let band = miFuncion("oruro")
console.log(band)
band = miFuncion("hola")
console.log(band)
