/****************************************************************
https://leetcode.com/problems/two-sum/
Problem: Two Sum
________________________________________
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
________________________________________
Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 

Constraints:

2 <= nums.length <= 103
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists
*****************************************************************/

// Runtime: 84 ms 
// Memory Usage: 39.2 MB
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let res = [];
    for (const [i, num] of nums.entries()) {
        console.log(i, num);
        let pendingSum = target - num;
        let pendingSumIndex = nums.indexOf(pendingSum);

        if (i !== pendingSumIndex && pendingSumIndex !== -1) {
            res = [i, pendingSumIndex];
            break;
        }
    }
    return res;
};