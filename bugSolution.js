function foo(a, b) {
  // Explicit type checking and conversion
  a = Number(a);
  b = Number(b);
  if (isNaN(a) || isNaN(b)) {
    return NaN; // Handle cases where conversion fails
  }
  return a + b;
}

console.log(foo(1, '2')); // Output: 3

function bar(a, b) {
  return a + b; // No changes needed for correct type inputs
}

console.log(bar(1, 2)); // Output: 3