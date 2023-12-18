function memoize(defaultValue) {
   let memoizedData = defaultValue;
 
   const getMemData = () => memoizedData;
 
   const setMemData = (newData) => {
     memoizedData = newData;
   };
 
   return [getMemData, setMemData];
 }
 
 //
 const memData1 = memoize();
 const getMemData1 = memData1[0];
 const setMemData1 = memData1[1];
 
 console.log(getMemData1()); // поверне undefined
 setMemData1(3);
 console.log(getMemData1()); // 3
 setMemData1('some string');
 setMemData1({ a: 'b' });
 console.log(getMemData1()); // поверне { a: 'b' }
 
 //
 const memData2 = memoize([1, 2, 3]);
 const getMemData2 = memData2[0];
 const setMemData2 = memData2[1];
 
 console.log(getMemData2()); // поверне [1, 2, 3]
 setMemData2('test');
 console.log(getMemData2()); // поверне 'test'
 