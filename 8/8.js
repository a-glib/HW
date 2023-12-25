function loggingDecorator(func) {
   return function (...args) {
     console.log(`${func.name}, args: ${args.join(', ')}`);
     const result = func.apply(this, args);
     return result;
   };
 }
 
 const someFn = (param1, param2, paramN) => {
   console.log('Executing someFn...');
 };
 
 const loggedFn = loggingDecorator(someFn);
 
 loggedFn(1, 2, 3);
 loggedFn('test');
 