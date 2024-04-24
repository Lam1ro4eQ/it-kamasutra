// Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.

// Division by zero should return NaN.

function remainder(n, m){
    if (n>m && m===0) {
          return NaN;
      } else if (m>n && n===0){
          return NaN;
      } 
      return (n < m) ? m%n : n%m;
  }