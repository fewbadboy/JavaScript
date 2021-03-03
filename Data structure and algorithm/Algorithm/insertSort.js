// 插入排序
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

let nums = [9,1,8,2,7,3,6,4,5]
insertSort.call(null, nums)

console.log(nums)