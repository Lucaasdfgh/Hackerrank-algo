let solution = {
   hourGlass: function(arr){
    maxX = 3; // + (arr[0].length % 3)
    maxY = 3; // + (arr.length % 3)
    total = -Infinity;  // has to be -64, but
   
    // begin at y == 0
    for (let y = 0; y <= maxY; y++) {
        for (let x = 0; x <= maxX; x++) {
            // sum the top of hourglass
            let sum = arr[y][x] + arr[y][x+1] + arr[y][x+2];
            
            // get the middle of hourglass
            sum += arr[y+1][x+1];
            
            // sum the bottom of hourglass
            sum += arr[y+2][x] + arr[y+2][x+1] + arr[y+2][x+2]
            
            // don't store result to keep space complexity down
            if (total < sum)
                 total = sum;
        }
    }
    
    return total;
   }
}
console.log(solution.hourGlass)
//higher order functions
//Functions Assigned to Variables
let plusFive = (number) => {
    return number + 5;  
  };
  // f is assigned the value of plusFive
  let f = plusFive;
   
  plusFive(3); // 8
  // Since f has a function value, it can be invoked. 
  f(9); // 14

  //A “higher-order function” is a function that accepts functions as parameters and/or returns a function.
  const arrayOfNumbers = [1, 2, 3, 4];
 
    const sum = arrayOfNumbers.reduce((accumulator, currentValue) => {  
     return accumulator + currentValue;
    });
 
console.log(sum); // 10 