function uno(){return Promise.resolve(1)}
function dos(){return Promise.resolve(2)}

uno().then(a=>{
  dos().then(b=>{
    console.log(a+b)
  })
})
