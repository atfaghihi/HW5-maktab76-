
function upperCase(arr){
   let upper = Object.assign({}, ["a".toUpperCase(), "v".toUpperCase(), "y".toUpperCase(), "z".toUpperCase()]);

   const obj = arr.reduce((accumulator, value) => {
      return {...accumulator, [value]: ''};
    }, {});
    
   console.log(upper);
   console.log(obj);
   }

let arr = ["a", "v", "y", "z"];
upperCase(arr);


