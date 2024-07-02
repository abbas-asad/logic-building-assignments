// 1. Write a function that checks if a given number is even or odd.

function checkEvenOdd(number: number) {
  if (number % 2 == 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
}
// checkEvenOdd(8)

// 2. Write a function that performs the following operations on an array:
// Add a number to the end of the array.
// Remove the first element from the array.

function modArray() {
  let array: number[] = [1, 2, 3];
  array.push(4);
  array.shift();
  console.log(array);
}
// modArray()

// 3. Write a function that multiplies each element in an array by 2.

function mulArr() {
  let array: number[] = [1, 2, 3];
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i] * 2;
  }
  console.log(array);
}
// mulArr()

// 4. Write a function that returns the largest number in a given array.

function largNArr(arr: number[]) {
  let largest = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}
let arr = [9, 99, 6, 22];
// console.log(largNArr(arr))
