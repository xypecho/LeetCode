/*
输入: "Let's take LeetCode contest"
输出: "s'teL ekat edoCteeL tsetnoc" 
注意：在字符串中，每个单词由单个空格分隔，并且字符串中不会有任何额外的空格。

https://leetcode-cn.com/problems/reverse-words-in-a-string-iii/
*/

// 写法1，最通俗易懂的版本
// export default (str) => {
//     let arr = str.split(' ');
//     let result = arr.map(item => item.split('').reverse().join(''));
//     return result.join(' ');
// }



// 写法2，精简代码
// split(' ') 也可以写成正则形式 split(/\s/g)
export default (str) => str.split(' ').map(item => item.split('').reverse().join('')).join(' ');