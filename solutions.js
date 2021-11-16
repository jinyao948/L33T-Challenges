// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.
//for loop

var twoSum = (nums, target) => {
	for(var i=0; i<nums.length; i++ ) {
		for(var j=i+1; j<nums.length; j++) {
if(nums[i] + nums[j] === target) {
return [i,j];
			}
		}
	} 
}

//normaml solution
const twoSum = (nums, target) => {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    const another = target - nums[i];

    if (another in map) {
      return [map[another], i];
    }

    map[nums[i]] = i;
  }

  return null;
};


//hash solution ==> space complexity is linear here 
const hashSum = function(nums, target) {
	const map = {};
	for(var i = 0; i<nums.length; i++) {
		var complementPair = target - value;
		if(map[complementPair] != undefined) {
			return [map[complementPair], i];
		} else {
			map[value] = i;
		}
	}
};
// e.g value =1 complement_pair = 10 - 1 = 9 



const twoSum = function(nums, target) {
    let hashmap = new Map();
    nums.forEach(function(item, i) {
        hashmap.set(item, i);
    })
    for (let i in nums) {
        if(hashmap.has(target-nums[i]) && i != hashmap.get(target-nums[i])) {
            return [i,hashmap.get(target-nums[i])]; 
        }
    }
};

