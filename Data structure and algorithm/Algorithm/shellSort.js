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

var nums = [9,1,8,2,7,3,6,4,5]
shellSort.call(null, nums)

console.log(nums)