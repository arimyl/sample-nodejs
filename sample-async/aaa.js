
//async await での表示順をお試しするソース
(async () => {
  console.log("PROMISES##########################");
  
  // const promise1 = new Promise(resolve => setTimeout(() => resolve('promise1'), 5000));
  // console.log(await promise1);

  // const promise2 = new Promise(resolve => setTimeout(() => resolve('promise2'), 10000));
  // console.log(await promise2);
  
  // const promise3 = new Promise(resolve => setTimeout(() => resolve('promise3'), 15000));
  // console.log(await promise3);
  

  const result = await new Promise(async resolve => {
    try {
      await new Promise(r => setTimeout(() => r(), 1000));
    } catch(e) {
      // pass
    }

    resolve("aaaa");
  });

  console.log(result);
})();