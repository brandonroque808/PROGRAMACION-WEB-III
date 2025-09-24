function uno(cb){setTimeout(()=>cb(1),1000)}
function dos(cb){setTimeout(()=>cb(2),1000)}

async function main() {
  let a = await new Promise(r=>uno(r))
  let b = await new Promise(r=>dos(r))
  console.log(a+b)
}

main()
