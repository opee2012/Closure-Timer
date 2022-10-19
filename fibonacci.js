// Make Closure
// 


function fibonacci2n(n) {
    //Original Fibonacci where sequence is 1, 2, 3, ..., 21, 34, 55, ...
    //Expects to be called with n>=1
    //TODO: Add error checking for n<1
    //Complexity is O(2^n)
    if (n <= 1)
    {
      return 1;
    }
    else
    {
      return fibonacci2n(n - 1) + fibonacci2n(n - 2);
    }
}

function fibonaccin(n){
    //Original Fibonacci where sequence is 1, 2, 3, ..., 21, 34, 55, ...
    //Expects to be called with n>=1
    //TODO: Add error checking for n<1
    //Complexity is O(n)
    let num1 = 1;
    let num2 = 1;
    let temp = 0;
  
    for(let ct = 1; ct <= n; ct++){
      temp = num1;
      num1 = num1 + num2;
      num2 = temp;
    }
  
    return num2;
}
  