function uno(){return Promise.resolve(1)}
function dos(){return Promise.resolve(2)}

async function main(){
  let a = await uno()
  let b = await dos()
  console.log(a+b)
}

main()
