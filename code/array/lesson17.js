/*
给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。
输入："23"
输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].

https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/
*/

export default (str) => {
    const map = {
        '2': ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z']
    };
    let inputNum = str.split(''); // 将输入的字符串切割为单独的数字，例如输入23 切割成 2，3
    if (inputNum.length < 1) {
        return false;
    } // 最少输入两个字符，否则报错
    let code = inputNum.map(item => map[item].join('')); // 映射输入的字符串对应的字母，输出结构为['abc','def']
    let comp = (arr) => {
        let temp = [];
        for (let i = 0; i < arr[0].length; i++) {
            for (let j = 0; j < arr[1].length; j++) {
                temp.push(`${arr[0][i]}${arr[1][j]}`)
            }
        }
        arr.splice(0, 2, temp); // 删除arr数组的前两项，并把temp数组插入到arr数组中
        if (arr.length > 1) {
            comp(arr)
        } else {
            return temp
        }
        return arr[0];
    }
    return comp(code)
}