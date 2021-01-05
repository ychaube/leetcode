/****************************************************************
https://leetcode.com/problems/reverse-integer/
Problem: Reverse Integer
________________________________________
Given a 32-bit signed integer, reverse digits of an integer.

Note:
Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
________________________________________
Example 1:
Input: x = 123
Output: 321

Example 2:
Input: x = -123
Output: -321

Example 3:
Input: x = 120
Output: 21

Example 4:
Input: x = 0
Output: 0
 

Constraints:

-231 <= x <= 231 - 1
*****************************************************************/

// Runtime: 88 ms
// Memory Usage: 40.3 MB
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let reversedNumber = parseInt(Math.abs(x).toString().split('').reverse().join('')) * Math.sign(x);
    return (reversedNumber <= (2 ** 31) && reversedNumber > -(2 ** 31)) ? reversedNumber : 0;
};