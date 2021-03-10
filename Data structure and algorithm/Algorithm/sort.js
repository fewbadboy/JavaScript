// 选择排序-不稳定
var sortArray = function(nums) {
  let len = nums.length
  let temp
  for(let i = 0 ;i < len; i++){
      temp = i
      for(let j = i+1; j < len; j++){
          if(nums[j] < nums[temp]){
              temp = j
          }
      }
      [nums[i], nums[temp]] = [nums[temp], nums[i]]
  }
 return nums
};

// 插入排序-稳定
function insertSort(arr) {
  let len = arr.length
  for (let i = 1; i < len; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j] > arr[j-1]) {
        [arr[j-1], arr[j]] = [arr[j], arr[j-1]]
      }
    }
  }
}

// 希尔排序-不稳定
function shellSort(nums) {
  var len = nums.length
  var gap = 1
  while(gap < len/4){
    gap = gap * 4 + 1
  }
  for (gap; gap > 0; gap = ~~(gap/4)) {
    for(var i = gap; i < len; i++) {
      var temp = nums[i]
      for(var j = i - gap; j >=0 && nums[j] > temp; j -= gap) {
        nums[j + gap] = nums[j]
      }
      nums[j+gap] = temp
    }
  }
}

// 归并排序-稳定
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