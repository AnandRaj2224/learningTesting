export function analyzeArray(arr) {

  let length = arr.length;
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  let average  = 0;
  for(const val of arr) {
    if(val > max) max = val;
    if(val < min) min  = val;
    sum += val;
  }
  average = sum/length;

  const object = {
    average : average,
    min : min,
    max : max,
    length : length
  };

  return object;
}