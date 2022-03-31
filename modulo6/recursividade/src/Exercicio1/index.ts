//a

const printNumbers = (n: number) => {
   if (n >= 0) {
     printNumbers(n - 1);
     console.log(n);
   }
 };


 //b

 const printNumbers2 = (n: number) => {
   if (n >= 0) {
     console.log(n);
     printNumbers2(n - 1);
   }
 };