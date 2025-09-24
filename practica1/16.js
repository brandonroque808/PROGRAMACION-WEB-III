function promesa(){
  return new Promise(res=>setTimeout(()=>res("ok"),1000))
}

async function main(){
  let r = await promesa()
  console.log(r)
}

main()
