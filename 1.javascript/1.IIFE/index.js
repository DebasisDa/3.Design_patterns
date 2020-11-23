/**
 * What is IIFE ??
 * Ans > when define and call function at a same time.
 * 
 * why use ??
 * 1. Do not create function or function variable
 * 2. Function or function variable become always global
 * 3. code encapsulation, create private variable
 * 4. Perform some operation and return value.
 */

(() => {
  const x = 20;
  const y = 20;
  const answer = x + y;
  console.log(answer);
})();