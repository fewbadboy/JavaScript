function mergeSort(nums) {
  let len = nums.length
	if(len < 2){
		return nums
	}
	let middle = Math.floor(len/2),
	left = nums.slice(0, middle),
	right = nums.slice(middle)
	return merge(mergeSort(left),mergeSort(right))
}

function merge(left, right) {
  let result = []
  while (left.length && right.length) {
    if(left[0] <= right[0]) {
      result.push(left.shift())
    } else {
      result.push(right.shift())
    }
  }
  while (left.length) {
    result.push(left.shift())
  }
  while (right.length) {
    result.push(right.shift())
  }
  return result
}

let nums = [9,1,8,2,7,3,6,4,5]

console.log(mergeSort.call(null, nums))