/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    const current=init
   return {
     increment(){
       return ++init;
     },
     decrement(){
       return --init;
     },
     reset(){
         init= current;
       return init;
     }
 
   }
     
 };
 
 