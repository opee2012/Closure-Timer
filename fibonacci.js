function fibonacci2n(n) {
    //Original Fibonacci where sequence is 1, 2, 3, ..., 21, 34, 55, ...
    //Expects to be called with n>=1
    //TODO: Add error checking for n<1
    //Complexity is O(2^n)
    if (n <= 1) return 1;
    else return fibonacci2n(n - 1) + fibonacci2n(n - 2);
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

function MyTimer() {
  var startTime;
  var elapsedTime;
  var currTime;

  function inStart() {
    startTime = Date.now();
    elapsedTime = startTime;
    return startTime;
  }

  function Elapsed() {
    currTime = Date.now();
    var temp = elapsedTime;
    elapsedTime = currTime;
    return currTime - temp;
  }

  function getTime() {
    var gtime = Date.now() - startTime;
    return gtime;
  }

  return {
    "start": inStart,
    "elapsed": Elapsed,
    "getTime": getTime
  };
}

var myArgs = process.argv.slice(2);

if (myArgs[0] == '-h' || myArgs[0] == '--help') {
  setHelp();
  process.exit();
}
if (myArgs.length == 0) {
  console.error("Error, no arguments specified please use -h or --help for usage information.");
  process.exit();
}
if (myArgs.length == 1) {
  console.error("Error, incorrect arguments specified please use -h or --help for usage information.");
  process.exit();
}

if (myArgs[0] == '-r' || myArgs[0] == '--recursive') {
  fib2nTimer = MyTimer();
  fib2nTimer.start();
  for (let i = 0; i < myArgs[1]; i++) {
    console.log((i+1) + "," + fib2nTimer.elapsed() + "," + fibonacci2n(i+1));
  }
  console.log("Total Time: " + fib2nTimer.getTime());
  process.exit();
}
if (myArgs[0] == '-i' || myArgs[0] == '--iterative') {
  fibnTimer = MyTimer();
  fibnTimer.start();
  for (let i = 0; i < myArgs[1]; i++) {
    console.log((i+1) + "," + fibnTimer.elapsed() + "," + fibonaccin(i+1));
  }
  console.log("Total Time: " + fibnTimer.getTime());
  process.exit();
}