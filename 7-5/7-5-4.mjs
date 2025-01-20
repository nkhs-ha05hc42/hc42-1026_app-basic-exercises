const func1 = () => {
    return new Promise((resolve) => {
      resolve("test1");
    });
  };
  
  const func2 = (fanc1) => {
    return new Promise((resolve) => {
      resolve("new" + fanc1);
    });
  };
  
  func1()
    .then((result1) => {
        console.log(result1)
        return func2(result1);
    })
    .then((result2) => {
      console.log(result2);
    })
    