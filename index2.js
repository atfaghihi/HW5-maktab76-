let nameBudgets = [
    { name: "John", age: 21, budget: 29000 },
    { name: "Steve", age: 32, budget: 32000 },
    { name: "Martin", age: 16, budget: 1600 }
    ];

    function getBudgets(arr) {
        return arr
          .map(function(obj) {
            return Object.values(obj)[2]})
          .reduce(function(acc, curr){
            return acc + curr;
          }, 0);
      }

console.log(getBudgets([
    { name: "John", age: 21, budget: 29000 },
    { name: "Steve", age: 32, budget: 32000 },
    { name: "Martin", age: 16, budget: 1600 }
]));