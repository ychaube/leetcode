/****************************************************************
https://leetcode.com/problems/palindrome-number/
Problem: Palindrome Number
________________________________________
Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.
Follow up: Could you solve it without converting the integer to a string?
________________________________________
Example 1:
Input: x = 121
Output: true

Example 2:
Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

Example 3:
Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

Example 4:
Input: x = -101
Output: false

Constraints:

-231 <= x <= 231 - 1
*****************************************************************/

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    let reversed = x.toString().split('').reverse().join('');
    return reversed == x;
};

var isPalindrome2 = function (x) {
    if (x < 0) {
        return false;
    }
    let reversed = 0;

    while (x) {
        let digit = x % 10; // 1234 -> 4
        reversed = (reversed * 10) + digit; // 1230 + 4
        x = x / 10 | 0;  // 12.3|0 -> 12
    }
};