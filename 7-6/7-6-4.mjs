const func1 = () => {
    return new Promise((resolve) => {
      resolve("Test1");
    });
  };
  
  
  const func2 = (ahou) => {
    return new Promise((resolve) => {
      resolve("New" + ahou);
    });
  };
  

  const executeFuncs = async () => {
    const result1 = await func1(); 
    console.log(result1); 
  
    const result2 = await func2(result1); 
    console.log(result2); 
  };
  
  executeFuncs();
  