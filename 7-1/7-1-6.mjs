const A = (ahou) => { 
    if (ahou > 100) return // ここが処理の肝となる終了条件 
    A(ahou*2)
    console.log(ahou) 
  } 
   
  A(10)
  A(25) 