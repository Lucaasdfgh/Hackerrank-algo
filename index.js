//2D Array - DS
//function description
//Complete the function hourglassSum in the editor below.
//hourglassSum has the following parameter(s):
//int arr[6][6]: an array of integers
//Returns
//int: the maximum hourglass sum
function hourGlass(arr) {
    // we could set this to 3 given the problems constraings, but this allows changes
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