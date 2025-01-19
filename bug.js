function foo(x) {
  if (x == null) {
    return 0; //This will not work as expected
  } else {
    return x + 1; 
  }
}
console.log(foo(null)); //This will print 1 instead of 0
console.log(foo(undefined)); //This will print 1 instead of 0