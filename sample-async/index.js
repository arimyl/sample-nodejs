// 
// 
// 
// const promise1 = new Promise(resolve => setTimeout(() => resolve(123), 1000));
const promise1 = new Promise(function(aaa, bbb) {
  console.log('HHHHHHHHHHHHHHHH');
  console.log(aaa, bbb);
  aaa(111);
  aaa("OKOKOKOKOKOKOKOKOKOKOKOKOKOKO");
  console.log('HHHHHHHHHHHHHHHH');
});

console.log(promise1);

promise1.then(result => console.log(result));


// 
// 
// 
const promise2 = new Promise((resolve, reject) => setTimeout(() => reject(new Error('inpromise error')), 1000));

console.log('HHHHHHHHHHHHHHHH');
console.log(promise2);
console.log(promise2.then(() => console.log('promise2 rejected then')));

promise2.then(() => console.log('promise2 rejected then'))
  .catch(err => console.log(err));　//メソッドチェーン


// 
// 
// 

console.log("入る前");
let outerVar = null;
(async () => {
  const promise3 = new Promise(resolve => setTimeout(() => resolve('promise 3 result'), 1000));

  const promise3Result = await promise3;
  outerVar = promise3Result;
  console.log(promise3Result);
})();

console.log(outerVar);
console.log("入ったあと");


// 
// 
// 
(async () => {
  const promise4 = new Promise((resolve, reject) => setTimeout(() => reject(new Error('promise4 error')), 1000));

  try {
    const promise4Result = await promise4;
    console.log(promise4Result);
  } catch(e) {
    console.log(e);
  }
})();





(async () => {
  console.log("PROMISES##########################");
  
  const promise1 = new Promise(resolve => setTimeout(() => resolve(new Error('promise1')), 1000));

  const promise2 = new Promise(resolve => setTimeout(() => resolve(new Error('promise2')), 3000));
  
  const promise3 = new Promise(resolve => setTimeout(() => resolve(new Error('promise3')), 2000));

  console.log(await promise1);
  console.log(await promise2);
  console.log(await promise3);
})();