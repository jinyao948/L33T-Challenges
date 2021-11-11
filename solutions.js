// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.



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
